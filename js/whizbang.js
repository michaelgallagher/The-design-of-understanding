
// this activates the sticky kit for the buy button
// seems needlessly long ... sort this out later
(function() {
  $(function() {
    return $("#sticky-buy-button").stick_in_parent().on("sticky_kit:stick", (function(_this) {
      return function(e) {
        return setTimeout(function() {
          return $(e.target).addClass("show_hidden");
        }, 0);
      };
    })(this)).on("sticky_kit:unstick", (function(_this) {
      return function(e) {
        return setTimeout(function() {
          return $(e.target).removeClass("show_hidden");
        }, 0);
      };
    })(this));
  });

}).call(this);




// this does the resizing stuff for the top area
$(document).ready(function() {

  /*
      Get the window height,
      and set the element height
      to the window height minus some number.

      Then position the quote text in the center of this space
      (this requires responsive breakpoints as well).

      This code is based on:
      https://j.eremy.net/set-element-height-to-viewport/
      I just added the betterHeight and topMargin stuff.
  */

  var bannerSubtractor = 325;

  function setHeight() {
    windowHeight = $(window).innerHeight();
    var betterHeight = windowHeight - bannerSubtractor;
    var topMargin = betterHeight / 2;
    $('#the-quote').css('min-height', betterHeight);
    $('#quote-text-wrapper').css('padding-top', topMargin);

  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  $("#sticky-buy-button").stick_in_parent();

});
