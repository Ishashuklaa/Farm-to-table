const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const setupConnection = require('../config/database.config');
const { generateCustomerId, getCustomerCount } = require('../config/User.counter');
const { mailsending } = require('../config/mailsending.config');
require('dotenv').config();



exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, pass, phone } = req.body;

        if (!first_name || !last_name || !email || !pass || !phone) {
            return res.status(400).json({
                message: "All credentials are required"
            });
        }

        const customer_id = generateCustomerId();
        console.log(getCustomerCount);


        // Hash the password before storing it
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);

        // SQL query to insert data into the 'Customer' table
        const query = `INSERT INTO Customer (customer_id, first_name, last_name, email, password, phone, profile_image) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;

        let img = "None";
        const password = hashedPassword;

        // Wait for the database connection
        const db = await setupConnection();

        // Execute the query using the db connection
        const [result] = await db.execute(query, [customer_id, first_name, last_name, email, password, phone, img]);
        console.log("The user ", result);

        // Send a success response
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });

    } catch (error) {
        console.error("An error occurred while creating the user", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All credentials are required"
            });
        }

        // SQL query to select the user by email
        const query = `SELECT * FROM Customer WHERE email = ?`;

        const db = await setupConnection();
        const [result] = await db.execute(query, [email]);

        if (result.length === 0) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const user = result[0];

        // Check if the provided password matches the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Password does not match"
            });
        }

        // Create a JWT token using the user's customer_id as payload
        const token = await jwt.sign({ customer_id: user.customer_id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Set the token in a cookie
        res.cookie('token', token, {
            httpOnly: true
        });

        return res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.error("An error occurred during login", error);
        return res.status(500).json({
            message: "An error occurred during login"
        });
    }
};
// Function to generate a 6-digit OTP
const generateotp = () => {
    return Math.floor(100000 + Math.random() * 900000);  // Generates a random 6-digit integer
};

exports.forgotpassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const query = 'SELECT * FROM Customer WHERE email = ?';
        const db = await setupConnection();

        const [user] = await db.execute(query, [email]);
        if (!user || user.length === 0) {
            return res.status(400).json({
                message: "The user does not exist"
            });
        }

        const otp = generateotp();
        const response = await mailsending(email, otp);


        const otpquery = 'INSERT INTO OTP(otp, CUST_ID, created_at, expires_at, isVerified) VALUES (?, ?, ?, ?, ?)';
        const expires_at = new Date(Date.now() + 10 * 60 * 1000);

        const [result] = await db.execute(otpquery, [otp, user[0].customer_id, new Date(), expires_at, false]);
        if (result.length === 0) {
            return res.status(400).json({
                message: "An error occured in this "
            });
        }
        const token = await jwt.sign({ customer_id: user[0].customer_id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        console.log(token);
        const option = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure : true,
            samesite : "none"
        };

        // Set the token in a cookie
        // ankit's 5 minutes wasted here - koi nhi bhai tere liye 5 min kurbaan
        res.cookie("token", token, option);

        res.status(200).send({token})

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error ankit",
            error: error.message
        });
    }
};

exports.validateOtp = async (req, res) => {
    try {
        const { otp, newpassword } = req.body;
        const user = req.user;
        if (!otp || !user || !newpassword) {
            return res.status(401).json({
                message: "Some credentials are missing"
            });
        }

        const db = await setupConnection();
        const query = 'SELECT * FROM OTP WHERE CUST_ID = ?';
        const [result] = await db.execute(query, [user.customer_id]);

        if (result.length === 0) {
            return res.status(401).json({
                message: "The user is not verified"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);
        const newQuery = 'UPDATE Customer SET password = ? WHERE email = ?';
        const [newResult] = await db.execute(newQuery, [hashedPassword, user.email]);

        if (newResult.affectedRows === 0) {
            return res.status(401).json({
                message: "The user's password is not updated"
            });
        }

        return res.status(200).json({
            message: "The user is verified",
            user: user
        });

    } catch (error) {
        return res.status(400).json({
            message: "The user's OTP is not verified and the password is not updated",
            error: error.message
        });
    }
};
