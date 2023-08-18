$("h1").css("color", "green");
$("body").css("background-color", "white");
$("button").text("Don't click me!");
$("button").html("<em><strong>So much fun!</strong></em>");
$("h1").text("Learning JQuery!")

$("button").click(function(){
    $("h1").css("color","purple");
});

$("body").keydown(function(event){
    $("h1").text(event.key);
});

$("button").on("click", function() {
    $("h1").slideUp().slideDown().slideToggle().slideDown();
});