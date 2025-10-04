const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookies = require("cookie-parser")
const app = express();


// importing routes

 const course = require('./router/courses')
 const project = require('./router/project') 


const dotenv = require("dotenv").config();


//mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)


// port
const port = 3001;

//middleware

app.use(cors({
    origin:'http://localhost:3000', credentials:true
}));
app.use(bodyparser.json());


app.use(cookies())



//routes

app.use("/api/courses", course);
app.use("/api/project", project);
app.use('/api/user' , require('./router/Users'));


app.get('/api/countries-states', (req, res) => {
    res.json(countriesStates);
});


app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("server is running on port "+port)
});