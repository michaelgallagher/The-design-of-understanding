$(document).ready(function() {


  /* get the window height
     and set the element height
     to the window height minus some number
  */
  function setHeight() {
    windowHeight = $(window).innerHeight();
    var betterHeight = windowHeight - 325;
    var topMargin = betterHeight / 2;
    $('#the-quote').css('min-height', betterHeight);
    $('#quote-text-wrapper').css('padding-top', topMargin);

  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });


});
