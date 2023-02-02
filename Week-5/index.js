// Imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoutes = require('./routes/blog');

const PORT = process.env.PORT;

// Connect app to MongoDB
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

// Create an express app
const app = express();
app.use(express.json());

// Routes
app.use('/blog', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});