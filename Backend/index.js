require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://reenarajeev30:<db_password>@mycluster.ri0c5.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster", {
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)
console.log("MONGODB_URI:", process.env.MONGODB_URI);
app.listen(3001, () => {
    console.log(`app is running on ${3001}`)
})