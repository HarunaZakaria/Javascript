//add a class from css to html element
$("h1").addClass("big-header");

// change the element text in html 
$("h1").html("Harunzy");



$("button").click(function () {
    $("h1").css("color", "red");
});


//this function changes h1 element to any key press on the keyboard
$(document).keypress(function (event) {
    $("h1").html(event.key);
});