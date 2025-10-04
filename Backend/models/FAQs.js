const mongoose = require('mongoose')

const FAQsSchema = mongoose.Schema({
    question: {
        type: String,
    },
    answer: {
        type: String,
    },
})

FAQsSchema.set("timestamps", true);
const FAQsCollection = mongoose.model("FAQs", FAQsSchema);

module.exports =FAQsCollection;