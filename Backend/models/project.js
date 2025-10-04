const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
   
    title: {
        type: String,
    },
   
 
    description: {
        type: String,
    },
   
   
})

projectSchema.set("timestamps", true);
const ProjectCollection = mongoose.model("project", projectSchema);

module.exports = ProjectCollection;
