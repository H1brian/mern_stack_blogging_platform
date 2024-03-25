import express from 'express';
import mongoose, { mongo } from 'mongoose'
import 'dotenv/config';

mongoose
    .connect(process.env.DATABASE_CLOUD)
    .then(() => {
        console.log('MongoDB database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
    
const app = express();


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});