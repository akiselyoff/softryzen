const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const moviesRouter = require('./routes/api/movies');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/movies', moviesRouter);

module.exports = app;
