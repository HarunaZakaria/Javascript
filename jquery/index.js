//add a class from css to html element
$("h1").addClass("big-header");

// change the element text in html 
$("h1").html("Harunzy");



$("button").click(function () {
    $("h1").css("color", "red");
});