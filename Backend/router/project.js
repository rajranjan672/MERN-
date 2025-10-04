const express = require('express');
const router = express.Router();
const ProjectController = require("../controllers/project");
// const validate = require("./users");
const {v4: uuidv4} = require("uuid")
let path = require("path")
const multer = require("multer")
const ActionPlanCollection = require("../models/project");
// const router = require('./router/Login');
const jwt = require("jsonwebtoken")
const JWT_SECRET='ultrockwillrock#'

 

function isValidUser(req, res, next) {
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message: 'Unauthorized Request'});
}

// const storage = multer.diskStorage({
//     destination: function (Req, res, cb) {
//         cb(null, "image");
//     },
//     filename: function (req, res, next) {
//         const alloerdfileTypes = ["image/jpeg", "image/jpg", "image/png"]
//         if(alloerdfileTypes.includes(file.mimetype)) {
//             cb(null, true)
//         } else {
//             cb(null, false)
//         }
//     }

    
// })

// let upload = multer({storage, fileFilter});

// router.route("/createActionPlans").post(upload.single("photo"), (req,res) => {
    // const title = req.body.title;
    // const description = req.body.description; 
    // const category = req.body.category; 
    // const photo = req.body.photo;

//     const newUserData = {
//         title,
//         description,
//         category,
//         photo,
//     };
//     const newUser =  new ActionPlanCollection(newData);

//     newUser
//     .save()
//     .path(() => res.json("User Added"))
//     .catch((err) => res.status(400).json("Error: " + err));

// });



const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: "No token provided, unauthorized." });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" }); // Forbidden
        }

        req.id = user.id; // Attach user id to the request
        next(); // Only call next if the token is valid
    });
};

  router.post("/createProject", 
                ProjectController.createProject) 


router.get(
    "/getProject", verifyToken,
    ProjectController.getProject
);

router.get(
    "/getOne/:id", verifyToken,
    ProjectController.findbyid
);

router.put(
    '/editProject/:id', verifyToken,
    ProjectController.editProject
);

router.delete(
    "/deleteProject/:id", verifyToken,
    ProjectController.deleteProject
);

module.exports = router;