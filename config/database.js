const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log("Connected to DB")
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connectDB