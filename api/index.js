import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './router/router.js';
import dbconnect from './config/db.js';

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API is running'
    });
});

dbconnect();

app.use(router);

export default app;