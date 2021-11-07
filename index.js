const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');



dotenv.config();

const PORT = process.env.PORT || 8800; // the port to connect to

app.listen(PORT, () => console.log(`Backend server connected on http://localhost:${PORT}`))