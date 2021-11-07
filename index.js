const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');


dotenv.config(); // its ready to use to hide secret keys

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Backend Server connected to MongoDB Atlas...")
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
app.get('/', (req, res) => {
    res.send("Welcome to homepage")
})

const PORT = process.env.PORT || 8800; // the port to connect to
app.listen(PORT, () => console.log(`Backend server connected on http://localhost:${PORT}`))