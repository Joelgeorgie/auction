const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");

const app = express();
const PORT = 8001;

const mongoURI = "mongodb+srv://yoelvgeorgie:hello1234@cluster0.cj2mk5c.mongodb.net/Users?retryWrites=true&w=majority";


mongoose.connect(mongoURI);
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB using Mongoose');
  });
  
  db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/product", productRoute);



app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

