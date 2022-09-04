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
  });
  $("#sixth").click(function () {
    $("#seven").show();
    $("#first").hide();
    $("#second").css("opacity", "0.1");
    $("#third").css("opacity", "0.2");
    $("#fourth").css("opacity", "0.4");
  });
  $("#seven").click(function () {
    $("#eight").show();
    $("#second").hide();
    $("#third").css("opacity", "0.1");
    $("#fourth").css("opacity", "0.2");
  });
  $("#eight").click(function () {
    $("#nine").show();
    $("#third").hide();
    $("#fourth").css("opacity", "0.1");
  });
  $("#nine").click(function () {
    $("#ten").show();
    $("#fourth").hide();
  });
  $("#ten").click(function () {
    $("#eleven").show();
  });
  $("#eleven").click(function () {
    $("#twelve").show();
  });
  $("#twelve").click(function () {
    $("#thirteen").show();
  });
  $("#thirteen").click(function () {
    $("#fifth").css("opacity", "0.5");
    $("#sixth").css("opacity", "0.5");
    $("#seven").css("opacity", "0.5");
    $("#eight").css("opacity", "0.5");
    $("#nine").css("opacity", "0.5");
    $("#ten").css("opacity", "0.5");
    $("#eleven").css("opacity", "0.5");
    $("#twelve").css("opacity", "0.5");
    $("#thirteen").css("opacity", "0.6");
    $("#mark").show();
  });
});
