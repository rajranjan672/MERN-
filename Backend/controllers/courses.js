const { ObjectId } = require('mongodb');
const CourseCollection = require('../models/courses');


exports.CreateCourse = async(req, res, next) => {
    let response = {};
    const createNewCourse = new CourseCollection(req.body);

    await createNewCourse.save((error, course) => {
        if(error) {
            response = {success: false, message: "Course couldn't brought"};
        } else {
            response = {success: true, message: "Course brought Successfully"};
        }
         return res.json(response)
    });
}

exports.getCourses = async(req, res, next ) => {
    let response = {};
    CourseCollection.find((error, courses) => {
         if(error) {
             response = {success: false, message: "Couldn't get addresses"};
         } else {
             response = {success: true, courses: courses};
         };
        
        return res.json(response);
    });
    
};

exports.deleteCourse = async(req, res, next) => {
    let response = {};
    CourseCollection.findOneAndDelete({_id: req.params.id}, (error) => {
        if(error) {
            response = {success: false, message: "Something went wrong"}
        } else {
            response = {success: true, message: "Successfully deleted"}
        }
        return res.json(response)

    });
};