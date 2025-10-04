const PartnersCollection = require("../models/partners");

exports.addPartner = async(req, res, next) => {

    var user = new PartnersCollection({
        air: req.body.air,
        name: req.body.name,
        email: req.body.email,
        
        
       
    });

    try {
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch(err) {
        res.status(501).json(err)
    }
}

exports.getPartners = async(req, res, next) => {
    let response = {};

    PartnersCollection.find((error, partners) => {
        if(error) {
            response = { success: false, message: "something went wrong"};
        }else {
            response = { success: true, partners: partners};
        };

        return res.json(response)
    });
};