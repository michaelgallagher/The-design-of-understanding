// Initial load of page
$(document).ready(sizeContent);

// Watch the window's size and adjust the value when it changes
$(window).resize(sizeContent);

// Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() + "px";
    $("#the-quote").css("height", newHeight);
}
