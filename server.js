const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const config = require("config");
const mongoose = require("mongoose");
const db = config.get("mongoURI");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("app/public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mentor-match");
// require("./app/routing/api_routes.js")(app);
require("./app/routing/html_routes.js")(app);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.listen(PORT, function() {
  console.log("Listening on " + PORT);
});
const workoutUser = require("./models/workout_user");

app.post("/api/userworkout", function(request, response) {
  const data1 = request.body;
  const newWorkoutUser = new workoutUser(data1);

  if (data1.status === "returning_user") {
    workoutUser
      //  if(mongoose.Types.ObjectId.isValid(id)) {
      .findOneAndUpdate({ name: data1.name }, { $set: data1 }, { new: true })
      .then(docs => {
        if (docs) {
          response.send(`${docs.name} has been updated`);
        } else {
          response.send("no such user exist");
        }
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });

    //  .catch(err => console.log(err));
  } else if (data1.status === "new") {
    newWorkoutUser
      .save()
      .then(item => response.send(`${item.name} saved!`))
      .catch(err => console.log(err));
  } else {
    response.send("error occured");
  }
});

// app.get("/api/userworkout", function(request, response) {
//   const data1 = request.body;
//   const newWorkoutUser = new workoutUser(data1);

//   newWorkoutUser
//     .save()
//     .then(item => response.send(item))
//     .catch(err => console.log(err));
// });

app.delete("/api/userworkout/delete", function(request, response) {
  console.log("delete>>>api>>", request.body);
  workoutUser
    .findOneAndDelete(
      request.body

    )
    .then(response.send(`${request.body.name} has been deleted`))
    .catch(err => console.log(err));
});




app.post("/api/userworkout/all", function(request, response) {
  // console.log("post>>>api>>", request.body)
  workoutUser
    .find()
    .sort({ date: -1 })
    .then(item => response.send(item))
    .catch(err => console.log(err));
});
