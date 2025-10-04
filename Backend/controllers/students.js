const StudentCollection = require("../models/student-detail");

exports.createStudent = async(req, res, next) => {
    let response = {};
    const createNewStudent = new StudentCollection(req.body);
    createNewStudent.save(function(error, student) {
        if(error) {
            response = {success: false, message: "Student couldn't created"};
        } else {
            response = {success: true, message: "Succfully Student created"};
        }
        return res.json(response);
    });
};