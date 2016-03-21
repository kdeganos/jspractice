$(document).ready(function() {

  $("li#button1").click(function() {
    $("li#button1").addClass("active");
    $("li#button2").removeClass("active");
    $("li#button3").removeClass("active");
    $("div#1").removeClass("hidden");
    $("div#2").addClass("hidden");
    $("div#3").addClass("hidden");

  });

  $("li#button2").click(function() {
    $("li#button2").addClass("active");
    $("li#button1").removeClass("active");
    $("li#button3").removeClass("active");
    $("div#2").removeClass("hidden");
    $("div#1").addClass("hidden");
    $("div#3").addClass("hidden");
  });

  $("li#button3").click(function() {
    $("li#button3").addClass("active");
    $("li#button1").removeClass("active");
    $("li#button2").removeClass("active");
    $("div#3").removeClass("hidden");
    $("div#1").addClass("hidden");
    $("div#2").addClass("hidden");
  });

  $("body").mousemove(function() {
    $("div.articlebox").("borderplus");
  });

});
