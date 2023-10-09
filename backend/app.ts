import { Application } from "express";
import express from "express";
import { configDotenv } from "dotenv";
import db from "./src/config/db";

const app: Application = express();

// Configure dotenv for environment variables
configDotenv();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// Configure routes
app.use('/v1', require("./src/routes"));
app.use("*", require("./src/controllers/+error"));

// Listen
app.listen(process.env.PORT, ()=> {
    console.log(`Teleserve backend running on PORT ${process.env.PORT}`);

    // Check if connection to database is confirmed
    db.getConnection((err, conn)=> {
        if(err){
            throw new Error(err.message);
        } else {
            conn.release();
            console.log("Connected to @teleserve database");
        }
    });
});