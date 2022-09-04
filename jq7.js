$(document).ready(function () {
  $("#first").click(function () {
    $("#second").show();
    $("#first").css("opacity", "0.8");
  });
  $("#second").click(function () {
    $("#third").show();
    $("#first").css("opacity", "0.6");
    $("#second").css("opacity", "0.8");
  });
  $("#third").click(function () {
    $("#fourth").show();
    $("#first").css("opacity", "0.4");
    $("#second").css("opacity", "0.6");
    $("#third").css("opacity", "0.8");
  });
  $("#fourth").click(function () {
    $("#fifth").show();
    $("#first").css("opacity", "0.2");
    $("#second").css("opacity", "0.4");
    $("#third").css("opacity", "0.6");
    $("#fourth").css("opacity", "0.8");
  });
  $("#fifth").click(function () {
    $("#sixth").show();
    $("#first").css("opacity", "0.1");
    $("#second").css("opacity", "0.2");
    $("#third").css("opacity", "0.4");
    $("#fourth").css("opacity", "0.6");
    $("#fifth").css("opacity", "0.8");
  });
  $("#sixth").click(function () {
    $("#see").show();
    $("#clouds").show();
    $("#gate").show();
  });
});
