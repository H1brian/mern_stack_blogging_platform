import express from 'express';
import mongoose, { mongo } from 'mongoose';
import 'dotenv/config'; // Using the data written in .env file
import userRoutes from './routes/user.route.js';  // extension ".js" is a must for backend
import authRoutes from './routes/auth.route.js';

// Create the application
const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.DATABASE_CLOUD)
    .then(() => {
        console.log('MongoDB database is connected');
    })
    .catch((err) => {
        console.log(err);
    });

// Allow json as the input of the backend
app.use(express.json()); 

// Connect to the server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Use error middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});