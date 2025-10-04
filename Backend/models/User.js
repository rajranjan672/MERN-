const mongoose = require('mongoose');
const {Schema} = mongoose;
const jwt = require("jsonwebtoken")
const JWT_SECRET='ultrockwillrock#'

const UserSchema = new Schema({
   
    name:{
        type:String,  
        require:true, 
 // This allows letters and spaces
    },
    email:{
        type:String,
        unique:true,
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password:{
        type:String,
        required: true
        
        
    },
   
    
    tokens:{

    }
    
    
})

UserSchema.methods.generateToken = async function() {
    let token = jwt.sign({_id: this._id}, JWT_SECRET)
    this.tokens = this.tokens.concat({token: token})
    await this.save()
    return token;
}

const User=mongoose.model('userr',UserSchema);
// same email will not enter  again
module.exports=User
