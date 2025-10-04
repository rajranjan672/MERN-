const express = require('express');
const { ObjectId, ReturnDocument } = require('mongodb');
const router = express.Router();
const CourseCollection =  require('../models/courses')
const CourseController = require('../controllers/courses')


router.post(
    "/createCourse",
    CourseController.CreateCourse
);

router.post(
    "/getCourses",
    CourseController.getCourses
);


router.delete(
    "/deleteCourse/:id",
    CourseController.deleteCourse
);

module.exports = router;