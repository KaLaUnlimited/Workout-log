let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let WorkoutSchema = new Schema({
    // `title` is required and of type String
    name: {
        type: String,
        // required: true
    },
    user: {
        type: String,
        // require: true
    },
    cardio: {
        type: String,
       default:'--'
    },
    strength: {
        type: String,
        default:'--'
    },
    dance: {
        type: String,
        default:'--'
    },
    stretch: {
        type: String,
        default:'--'
    },
    goal: {
        type: String,
        default:'--'
    },
    workoutInput: {
        type: String,
        default:'--'
    },
    
    // `resources` is an object that stores a Resources id
    // The ref property links the ObjectId to the Resources model
    // This allows us to populate the Developer with an associated Resources
    resources: {
        type: Schema.Types.ObjectId,
        ref: "Resources"
    }
});

// This creates our model from the above schema, using mongoose's model method
let WorkoutUser = mongoose.model("WorkoutUser", WorkoutSchema);

// Export the Article model
module.exports = WorkoutUser;