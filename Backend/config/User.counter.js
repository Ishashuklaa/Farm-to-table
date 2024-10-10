let customerCount = 34;  


function generateCustomerId() {
    customerCount++;  // Increment the count each time a new customer is added
    return `CUST${customerCount}`;
}

// 
module.exports = {
    getCustomerCount: () => customerCount,
    generateCustomerId
};
