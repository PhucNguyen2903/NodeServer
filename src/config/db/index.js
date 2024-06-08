const mongoose = require('mongoose');


 async function Connect() { 
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/ECommerce');
        console.log("Connect to DB successfully...");

    } catch (error) {
        console.log("Connect to DB failed: " + error);
    }
}

module.exports = {Connect};