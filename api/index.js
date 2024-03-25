import express from 'express';
import mongoose, { mongo } from 'mongoose';
import 'dotenv/config'; // Using the data written in .env file
import userRoutes from './routes/user.route.js';  // extension ".js" is a must for backend

mongoose
    .connect(process.env.DATABASE_CLOUD)
    .then(() => {
        console.log('MongoDB database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
    
const app = express();

app.use('/api/user', userRoutes);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

