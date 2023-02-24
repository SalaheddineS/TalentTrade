import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

if(!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
}
if(!process.env.PORT) {
    throw new Error('PORT must be defined');
}
if(!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
}
if(!process.env.CertificationImages){
    throw new Error('CertificationImages must be defined');
}

// Connect to MongoDB


app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected...,you can now start requests')).catch(err => console.log(err));
