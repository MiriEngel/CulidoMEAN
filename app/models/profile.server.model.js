// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * A Validation function for local strategy email
 */
var validateLocalStrategyEmail = function (email) {
  return ((this.provider !== 'local' && !this.updated) || validator.isEmail(email));
};

// Define a new 'ProfileSchema'
const ProfileSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        default: '',
        validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
  },
    fullName: {
        type: String,
        trim: true
    },
    birthDate: {
        type: Date
    },
    picture: {
        type: String,     
    },
    phoneNumber:{
        type: Number,
    },
    description: {
        type: String,
        default: '',
    },
    score: {
        type: Number
    },
    followersCount: {
        type: Number,
    },
    lastSubscriptionDate: {
        type: Date
    },
  //in seconds
    subscripptionTime: {
        type: Number
    },
  // necessary? 
    isActiveSubscription: {
        type: Boolean
    },
    recipesArray: [
        Schema.Types.ObjectId,
      // Alex alter
    ],
     myArticles:{
         type:[Schema.ObjectId],
         ref:'Article'
     },


    created: {
         type: Date,
         default: Date.now
    }
});


mongoose.model('Profile', ProfileSchema);