import express, { response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

import { connectDB } from "./Models/dbconnection.js";
import ErrorHandler from "./middleware/ErrorHandler.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

import AdminRouter from './routes/adminrouter.js'
import LawyerRouter from './routes/lawyerrouter.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;


app.use(cors());
app.use(express.json());

app.use(cookieParser());
connectDB();

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Increase JSON payload limit
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api/admin' , AdminRouter)
app.use('/api/lawyer' , LawyerRouter)
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
