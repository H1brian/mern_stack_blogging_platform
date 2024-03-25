import express from 'express';
import mongoose, { mongo } from 'mongoose';
import 'dotenv/config'; // Using the data written in .env file
import userRoutes from './routes/user.route.js';  // extension ".js" is a must for backend
import authRoutes from './routes/auth.route.js';

mongoose
    .connect(process.env.DATABASE_CLOUD)
    .then(() => {
        console.log('MongoDB database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
    
const app = express();

app.use(express.json()); // allow json as the input of the backend

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

