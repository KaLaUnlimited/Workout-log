// const db = require("../models");

// // Defining methods for the UserssController
// module.exports = {

//     findAll: function(req, res) {
//         console.log("******************findAll method****************");
//         db.Workout_Users
//             .find(req.query)
//             .sort({ date: -1 })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     }, //findOne method is for signin only
//     findOne: function(req, res) {
//         console.log(req.body.email)
//         db.WorkoutUser
//             .findOne({ "email": req.body.email })
//             .sort({ date: -1 })
//             .then(dbModel => {
//                 //testing: 
//                 console.log("controller data:" + dbModel)
//                 //testing ended:
//                 if (dbModel === null) {
//                     console.log("creating user...." + dbModel)
//                     db.WorkoutUser
//                         .create(req.body)
//                         .then(dbModel => res.json(dbModel))
//                         .catch(err => res.status(422).json(err));
//                     res.json("controller side" + dbModel)

//                 }
//             })
//             .catch(err => res.status(422).json(err));


//     },
//     //findByEmail allows to return user's preferences back to the dasboardpages.jsin my technologies
//     findByEmail: function(req, res) {
//         console.log("****findByEmail:*****")
//         console.log(req.body)
//         // res.send("users preferences has been sent to the back! Next step database...")
//         db.WorkoutUser
//             //   .findById(req.body.id)
//             .findOne({ "email": req.body.email })
//             // //   // .findById(req.id)
//             .then(dbModel => {
//                 console.log("retriving preferences...")
//                 console.log(
//                     dbModel
//                 )
//                 res.json(dbModel)
//             })
//             .catch(err => res.status(422).json(err));
//         //   s
//     },
//     create: function(req, res) {
//         db.WorkoutUser
//             .create(req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     update: function(req, res) {
//         console.log("****testing from update in userscontroller.js")
//         console.log(req.body)
//         db.WorkoutUser
//             .updateMany({ "email": req.body.email }, { html: req.body.html, css: req.body.css, javascript: req.body.javascript, jquery: req.body.jquery, mongodb: req.body.mongodb, nodejs: req.body.nodejs, mentor: req.body.mentor, mentee: req.body.mentee })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     remove: function(req, res) {
//         db.WorkoutUser
//             .findById({ _id: req.params.id })
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },

//     addConnection: function(req, res) {

//         console.log("running addConnection");
//         console.log("req.body from inside addConnection");
//         console.log(req.body);

//         /*
//                 db.WorkoutUser.findOneAndUpdate(
//                   { _id: req.body.userIndex }, 
//                   { $push: { mentoredUsers: req.body.mentorIndex } })
//         */

//         db.WorkoutUser.findOneAndUpdate({ _id: req.body.userIndex }, { $push: { mentoredUsers: req.body.mentorIndex } })
//             .then(function(result) {
//                 res.json({
//                     mentoredUsers: result.mentoredUsers
//                 });
//             })
//             .catch(function(err) {
//                 res.status(500).json(err);
//             });

//     }

// };