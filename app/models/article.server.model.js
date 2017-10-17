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
    location: {						//GPS
        type: [Number],
        index: '2dsphere',
        default: []
    },
    address: {				//location as address
        type: String,
        default: ''
    },

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    imgUrl: {
        type: [String],
        default: '',
        trim: true
    },
    tags: {
        type: [String],
        trim: true
    },



});

ArticleSchema.index({ location: 1 });

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);