const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Configure dotenv for environment variables
dotenv.config();

// Middlewares
app.use('/v1', require("./routes"));
app.use("*", require("./controllers/+error"));

app.listen(process.env.PORT, ()=> {
    console.log(`Teleserve backend running on PORT ${process.env.PORT}`);
});