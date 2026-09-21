import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './router/router.js';
import dbconnect from './config/db.js';
const app=express();
const PORT= process.env?.PORT || 9000;
app.use(cors( {origin: process.env.CLIENT_URL}))
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Zentora API is running'
    });
});
dbconnect();
app.use(router);
