const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const createError = require('http-errors')
const cookies = require("cookie-parser")
const app = express();


// app.use('/image', express.static(path.join(__dirname, 'images')));

// importing routes

 const course = require('./router/courses')
 const project = require('./router/project')

 

//  const users = require('./router/users')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 const MongoStore = require('connect-mongo');

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

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
//   });

// port
const port = 3001;


//middleware

app.use(cors({
    origin:'http://localhost:3000', credentials:true
}));
app.use(bodyparser.json());


app.use(cookies())



app.use((req, res, next) => {
    if (req.path.startsWith('/auth/google') || req.path.startsWith('/auth/google/callback')) {
        // Skip COOP header for Google OAuth routes
        return next();
    }
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});

  



//routes
app.use('/api/song' , require('./router/Music'));

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