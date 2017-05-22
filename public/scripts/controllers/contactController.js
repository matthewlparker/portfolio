'use strict';

var app = app || {};

(function(module) {
  const contactController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

  contactController.initContact = function(){
    $('.tab-content').hide();
    $('#contact-page').fadeIn(350);
    console.log('init about');
  }

  module.contactController = contactController;
})(app);
