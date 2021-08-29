import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config();

app.use(express.json())
app.use(cors());

app.use('/posts', postRoutes);
const PORT = process.env.PORT || 10000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
