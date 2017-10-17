'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    validator = require('validator');
//miri: check unique
// Define a new 'TagsSchema'
var TagsSchema = new Schema({
    name: {
        type: String
    },
    // thats it? maybe tag popularity for faster search? nahh to early for that 
});
// Create the 'RecipeSocial' model out of the 'TagsSchema'
mongoose.model('Tags', TagsSchema);