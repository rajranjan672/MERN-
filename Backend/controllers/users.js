const UserCollection = require('../models/users');

exports.addUser = async(req, res, next) => {

    var user = new UserCollection({
        email: req.body.email,
        username: req.body.username,
        password: UserCollection.hashPassword(req.body.password ),
        
       
    });

    try {
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch(err) {
        res.status(501).json(err)
    }
}

exports.getUsers = async(req, res, next) => {
    let response = {};

    UserCollection.find((error, users) => {
        if(error) {
            response = { success: false, message: "something went wrong"};
        }else {
            response = { success: true, users: users};
        };

        return res.json(response)
    });
};

