'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Define a new 'RecipeSchema'
var RecipeSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  profile: {
    type: Schema.ObjectId,
    ref: "Profie"
  },
  title: {
    type: String,
  },
  description: {
    type: String
  },
  productsArray: [
    Schema.Types.Mixed
  ],
  steps: [
    String
  ],
  album: [
    String
  ],
  created: {
    type: Date
  },
  //(Tags ObjectID) hidden tags - for programming reasons + tags that shouldnt be shown to the public. one request will take alot of resources. Waiting for your Comment
  hiddenTags: [
    Schema.ObjectId
  ],
  // tags - text to display to the client 
  tags: [
    String
  ]
});


mongoose.model('Recipe', RecipeSchema);