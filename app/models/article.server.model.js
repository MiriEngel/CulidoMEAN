// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },


    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    tags: {
        type: [String],
        trim: true
    },



});

// ArticleSchema.index({ location: 1 });

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);