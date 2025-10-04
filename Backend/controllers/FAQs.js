const FAQsCollection = require("../models/FAQs");
const multer = require("multer")
const path = require("path")
exports.createFAQs = async(req, res, next) => {

    // var user = new UserCollection({
    //     title: req.body.title,
    //     startingDate: req.body.startingDate,
    //     description: req.body.description
       
    // });

    // try {
    //     doc = await user.save();
    //     return res.status(201).json(doc);
    // }
    // catch(err) {
    //     res.status(501).json(err)
    // }
     let response = [];

     const createFAQs = new FAQsCollection({
        question: req.body.question,
        answer:req.body.answer,

     });

     await createFAQs.save((error, faqs) => {
         if(error) {
             response = {success: false, message: "something went wrong"};
         } else {
             response =  success= true, faqs= faqs
         }
         return res.send(response)
     });
};






exports.getFAQs = async(req, res, next) => {
    let response = [];

    FAQsCollection.find((error, FAQs) => {
        if(error) {
            response = { success: false, message: "something went wrong"};
        }else {
            response =   FAQs= FAQs;
        };

        return res.send(response)
    });
};

exports.findbyid = async(req,res) => {
    FAQsCollection.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            plans:result
        })
    })
}

exports.editFAQs = async(req,res) => {
    var ap = {
        title: req.body.title,
        startingDate: req.body.startingDate,
        completionDate: req.body.completionDate,
        description: req.body.description,
    };
    FAQsCollection.findByIdAndUpdate(req.params.id, {
        $set: ap}, {new: true}, (err, doc) => {
            if(!err) {res.send(doc);}
            else {
                console.log('Error in FAQs Update: ', + JSON.stringify(err, undefined, 2));
            }
        });
};

exports.deleteFAQs = async(req, res, next) => {
    
    FAQsCollection.findByIdAndDelete((req.params.id), (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('error in delete: ' +JSON.stringify(err, undefined, 2));
        }
    })
}
