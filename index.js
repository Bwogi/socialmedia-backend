const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const userRouter = require('./routes/users')
const resultsRouter = require('./routes/results')
const authRouter = require('./routes/auth')


dotenv.config(); // its ready to use to hide secret keys

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Backend Server connected to MongoDB Atlas...")
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
// app.get('/', (req, res) => {
//     res.send("Welcome to homepage")
// });
// app.get('/users', (req, res) => {
//     res.send("Welcome to users page")
// });
app.use("/api/users", userRouter);
app.use("/api/results", resultsRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8800; // the port to connect to
app.listen(PORT, () => console.log(`Backend server connected on http://localhost:${PORT}`))