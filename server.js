const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blogRoutes");

// configuring .env file path
dotenv.config({path: "./config/config.env"});

// creating an express application
const app = express();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// application listening on assigned port
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Application is up and running on port: ${PORT}`);
})

// support parsing of application/x-www-form-urlencoded post data
// app.use(express.urlencoded({extended: true}));

// support parsing of application/json type post data
app.use(express.json());

// blog route - TODO
app.use("/api/v1/blogs", blogRoutes);