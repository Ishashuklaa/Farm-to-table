const express = require('express');
const setupConnection = require('./config/database.config');
const router = require('./router/User.router');
const cookieparser = require('cookie-parser');
require('dotenv').config();
const app = express();


//Middlewares
const connection = setupConnection();
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/',(req,res)=>{
    return res.send(`<h1>The server is running</h1>`)
});
app.use('/users/api/v2',router);
PORT = process.env.PORT_NUM

app.listen(PORT ,()=>{
    console.log("The server is running ");
});