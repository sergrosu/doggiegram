const express = require('express')
const app = express()
const connectDB = require('./config/database')

require('dotenv').config({ path: "./config/.env" })

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server running on port ${PORT}`)
})
