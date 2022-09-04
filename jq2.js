$(document).ready(function () {
  $("#where_am_i").click(function () {
    $(this).hide();
    $("#one").show();
  });
  $("#one").click(function () {
    $(this).hide();
    $("#two").show();
  });
  $("#two").click(function () {
    $(this).hide();
    $("#three").show();
  });
  $("#three").click(function () {
    $(this).hide();
    $("#four").show();
  });
  $("#four").click(function () {
    $(this).hide();
    $("#five").show();
  });
  $("#draggable").click(function () {
    $("#blue").show();
  });
});
