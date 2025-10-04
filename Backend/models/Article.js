const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true},
    articleImage: {type: String, required: true},
    postedDate: {type: Date, default: Date.now()},
});

const ArticleController = mongoose.model('articles', articleSchema)

module.exports = ArticleController;