import express from "express";
import { PORT, mongodbURL } from "./config.mjs";
import mongoose  from "mongoose";
import Bookroutes from "./ROUTES/Bookroutes.js";
import cors from "cors";


const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin: "http://localhost:3000/",
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowHeaders: ['Content-ype'],
//     });
// )

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the MERN stack project");
});

// // newly added 
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'path-to-your-build-folder', 'index.html'));
//   });

app.use('/books', Bookroutes);

// route for saving a new book
mongoose
    .connect(mongodbURL, { serverSelectionTimeoutMS: 30000 })
    .then(() => {
        console.log("App is connected to the database");
        app.listen(PORT, () => {
            console.log(`The app is working correctly on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
