'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Define a new 'RecipeSocialSchema'
var RecipeSocialSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date
  },
  profile: {
    type: Schema.ObjectId,
    ref: "Profile",
  },
  recipe: {
    type: Schema.ObjectId,
    ref: "Recipe"
  },
  likes: {
    type: Number,
  },
  comments: [
    Schema.Types.Mixed
  ],
  rating: {
    type: Number
  },




  /*
  comment example
  comments: [
         Schema.Types.Mixed
         ],
         
  {profile: {firstName: "yyy", LastName: "bbb" ... }, comment: "text text text", date: "11/11/11"}}
  {email: "a@a.c, comment: "text text text", date: "11/11/11"}
  {comment: "text text text text"} -- anon 
  
   */
});
// Create the 'RecipeSocial' model out of the 'RecipeSocialSchema'
mongoose.model('RecipeSocial', RecipeSocialSchema);