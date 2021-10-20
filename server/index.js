
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

// const CONNECTION_URL = 'mongodb://localhost:27017/cisa';


// client id google:1046713083875-ahurljkaqedrsi671jftilq4raukop9p.apps.googleusercontent.com
// code secret client :fmIZmmcyn3PcYXJIyfv3AiqT
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL1, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);