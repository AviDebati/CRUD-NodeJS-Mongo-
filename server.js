const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const path=require('path');

const connectDB=require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

connectDB();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use('/CSS',express.static(path.resolve(__dirname,"assets/CSS")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


app.use('/',require('./server/routes/router'))

  app.listen(PORT, function() {
    console.log("Server started on port 3000.");
  });