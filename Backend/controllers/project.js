const ProjectCollection = require("../models/project");

exports.createProject = async( req, res, next) => {

   
     let response = [];
try {
     const newProject = new ProjectCollection({
        title:req.body.title,
        description: req.body.description
     });

    const savedProject = await newProject.save() 
     return res.status(201).json({
        success: true,
        data: savedProject
    });
}catch (error) {
    console.error(error);
    return res.status(500).json({
        success: false,
        message: "Something went wrong"
    });
}
}





exports.getProject = async (req, res, next) => {
    try {
        const plans = await ProjectCollection.find(); // Await the result

        if (!plans || plans.length === 0) {
            return res.status(404).json({ success: false, message: "No action plans found." });
        }

        return res.json({ success: true, data: plans }); // Send response only once
    } catch (error) {
        console.error(error); // Log the error for debugging
        // Ensure only one response is sent
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: "Something went wrong" });
        }
    }
};


exports.findbyid = async(req,res) => {
    const id = req.params.id
    const trimmed_id = id.trim()
    ProjectCollection.findById(trimmed_id)
    .then((result) => {
       try{ res.status(200).json({
            plans:result,
        }
        
        )}catch {
            res.status(404).json({message: "not found"})
        }
        

        
    })
}

exports.editProject = async(req,res) => {
    var ap = {
        title:req.body.title,
        description: req.body.description

    };
    ProjectCollection.findByIdAndUpdate(req.params.id, {
        $set: ap}, {new: true}, (err, doc) => {
            if(!err) {res.send(doc);}
            else {
                console.log('Error in actionPlan Update: ', + JSON.stringify(err, undefined, 2));
            }
        });
};

exports.deleteProject = async(req, res, next) => {
    
    ProjectCollection.findByIdAndDelete((req.params.id), (err, doc) => {
        if(!err) {
            res.send("deleted",doc);
        }
        else {
            console.log('error in delete: ' +JSON.stringify(err, undefined, 2));
        }
    })
}
