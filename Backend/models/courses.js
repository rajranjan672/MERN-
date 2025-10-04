const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    duration: {
        type: Number,
    },
    courseType: {
        type: String,
    },
    language: {
        type: String,
    }
})

CourseSchema.set("timestamps", true);

const CourseCollection = mongoose.model("CourseDetails", CourseSchema);

module.exports = CourseCollection;