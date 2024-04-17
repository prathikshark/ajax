console.log("TEST");

$(document).ready(function () {
  $("#submit-btn").on("click", function (e) {
    e.preventDefault();

    user_data = {
      user: {
        name: $("#name").val(),
      },
    };

    console.log(user_data);
    $.ajax({
      url: "http://localhost:3000/users",
      method: "POST",
      data: user_data,
      dataType: "html",
      success: function (result) {
        console.log(result);
        $("#all_users").append(result);
      },
    });
  });
});
