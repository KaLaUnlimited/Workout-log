$(document).ready(function() {


  //   $("#all").on("click", function(event) {
  //     event.preventDefault();
  $.post("/api/userworkout/all").then(function(data) {
    data.map(x => {
      $("#list").append(
       `<tr ><td>${x.name}
        </td><td>${x.strength}</td>
        <td>${x.cardio}</td>
        <td>${x.dance}</td>
        <td>${x.stretch}</td>
        <td>${x.goal}</td>
        <td>${x.workoutInput}</td>
         <td><button id=${x.name} value=${x._id} class='del'>delete</delte></td> </tr>`
      );
    });
    console.log("data>>>", data);
  });

  $(document).on('click', '.del', function(){ 

    const value = $(this).val();
    const name = $(this).attr("id");
    console.log("delete button>>>", value);

    $.ajax({ url: `/api/userworkout/delete`, method: "DELETE", data:{_id:value,name} })
            .then(function (data) {
               alert(data)
               location.reload();
            })
            .catch(function (err) {
              console.log(err)
            });

});
  // $(".del").on("click", function(event) {
  //   // event.preventDefault();
  //   // let name = $("#input_name").val();

  //   // $.post("/api/userworkout/delete", { name }).then(function(data) {
  
  //   // });
  // });
});
