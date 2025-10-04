const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
   
    title: {
        type: String,
    },
    email: {
        type: String,
    },
    category: {
        type: String,
    },
    method: {
        type: String,
    },
    startingDate : {
        type: String,
    },
    completionDate: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String
    },
   
})

projectSchema.set("timestamps", true);
const ProjectCollection = mongoose.model("project", projectSchema);

module.exports = ProjectCollection;
