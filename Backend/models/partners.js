const mongoose = require('mongoose')

const PartnersSchema = mongoose.Schema({
    air: {
        type: Number,
    },
    name: {
        type: String,
    },
    email: {
        type:String
    },
})

PartnersSchema.set("timestamps", true);
const PartnersCollection = mongoose.model("Partners", PartnersSchema);

module.exports =PartnersCollection;