$(document).ready(function () {
  $("#draggable").click(function () {
    $(this).hide();
    $("#arch").show();
  });
  $("#arch").click(function () {
    $("#go").show();
  });
  $("#go").click(function () {
    $("#arch").css("opacity", "0.8");
    $(this).css("font-style", "italic");
    $("#wait").show();
  });
  $("#wait").click(function () {
    $("#arch").css("opacity", "0.6");
    $(this).css("font-style", "italic");
    $("#trust").show();
  });
  $("#trust").click(function () {
    $("#arch").css("opacity", "0.4");
    $(this).css("font-style", "italic");
    $("#okay").show();
  });
  $("#okay").click(function () {
    $("#arch").css("opacity", "0.2");
    $(this).css("font-style", "italic");
    $("#carpe").show();
  });
});
