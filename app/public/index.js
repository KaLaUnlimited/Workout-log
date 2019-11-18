$(document).ready(function() {
  // All your jQuery will go here!

let workout ={}
//    {
//     user: "",
//     name: "",
//     cardio: "",
//     strength: "",
//     dance: "",
//     stretch: "",
//     goal: "",
//     workoutInput: ""
//   };

  $("input[name='user']").click(function() {
    let status = $("input[name='user']:checked").val();
    workout.status = status;
    //console.log("radio!");

    // if (user === "new") {
    //   $("#input_name").removeAttr("disabled");
    // } else {
    //   $("#input_name").prop("disabled", "true");
    //   workout.name = "previous";
    // }
  });

  $("#input_name").keyup(function() {
    let name = $("input[id='input_name']").val();
    //console.log("name>>>", name);
    workout.name = name.toLowerCase();
  });
  $("#cardioWorkout").click(function() {
    workout.cardio = $("#cardioWorkout").val();
    //console.log("workouts: ", workout);
  });

  $("#strengthWorkout").click(function() {
    workout.strength = $("#strengthWorkout").val();
    //console.log("workouts: ", workout);
  });

  $("#danceWorkout").click(function() {
    workout.dance = $("#danceWorkout").val();

    //console.log("workouts: ", workout);
  });

  $("input[name='stretch']").click(function() {
    let stretch = $("input[name='stretch']:checked").val();
    workout.stretch = stretch;
    //console.log("workouts: ", workout);
  });

  $("input[name='goal']").click(function() {
    let goal = $("input[name='goal']:checked").val();
    workout.goal = goal;
    //console.log("workouts: ", workout);
  });

  $(".comment").keyup(function() {
    let comment = $(".comment").val();
    workout.workoutInput = comment;
    //console.log("workouts: ", workout);
  });

  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("ajax request", workout);
    // if(workout.cardio && workout.dance && workout.dance &&
    //    workout.name && workout.goal && workout.strength &&
    //    workout.stretch )
    if (workout.name && workout.status) {
      $.post("/api/userworkout", workout).then(function(data) {
        console.log("ajax response>>>", data);
        alert(data);
        // workout = {
        //   user: "returning_user",
        //   //   name: '',
        //   cardio: "",
        //   strength: "",
        //   dance: "",
        //   stretch: "",
        //   goal: "",
        //   workoutInput: "",
        //   name: ""
        // };
        $("input[id='input_name']").val(null);
        $("#returning").attr("checked", "false");
        $("input[name='user']:checked=false").val();
      });
    } else {
      alert("Please check form: Need name or status");
    }
  });
  //


});
