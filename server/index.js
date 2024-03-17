import mongoose from 'mongoose';
import express from 'express';
const app = express();
const CONNECTION_URL = 'mongodb://localhost:27017/IEEE'
const PORT = 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('Database connected')))
    .catch((error) => console.log(error.message));