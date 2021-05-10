import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRoutes from './routes/users.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/users', usersRoutes);

app.use('/', (req, res) => {
    res.send("Server running...");
});

const URL = "mongodb+srv://admin-woong:bf3qVT6hq0TNNMur@cluster0.dthag.mongodb.net/webProject?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running or port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);