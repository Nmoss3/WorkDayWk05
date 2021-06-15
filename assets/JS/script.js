// Display today's day and date at the top of application
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // saveBtn click event listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var duties = $(this).siblings(".duty").val();
    var scheduleTime = $(this).parent().attr("id");

    // Save entered data into localStorage
    localStorage.setItem(scheduleTime, duties);
  });

  function hourTracker() {
    // get current hour
    var hourNow = moment().hour();

    // checks time in comparison to the id name before the dash

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlock < hourNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === hourNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Get items from local storage
  $("#hour8AM .duty").val(localStorage.getItem("hour8AM"));
  $("#hour9AM .duty").val(localStorage.getItem("hour9AM"));
  $("#hour10AM .duty").val(localStorage.getItem("hour10AM"));
  $("#hour11AM .duty").val(localStorage.getItem("hour11AM"));
  $("#hour12PM .duty").val(localStorage.getItem("hour12PM"));
  $("#hour1PM .duty").val(localStorage.getItem("hour1PM"));
  $("#hour2PM .duty").val(localStorage.getItem("hour2PM"));
  $("#hour3PM .duty").val(localStorage.getItem("hour3PM"));
  $("#hour4PM .duty").val(localStorage.getItem("hour4PM"));
  $("#hour5PM .duty").val(localStorage.getItem("hour5PM"));

  // calling time tracker
  hourTracker();
});
