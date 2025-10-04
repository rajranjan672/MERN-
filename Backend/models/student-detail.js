const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    studentName: {
        type: String,
    },
    contact: {
        type: Number,
    },
    address: {
        type: String,
    },
    email: {
       type: String
    }
})

StudentSchema.set("timestamps", true);

const StudentCollection = mongoose.model("StudentDetails", StudentSchema);

module.exports = StudentCollection;