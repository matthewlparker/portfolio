'use strict';

var app = app || {};

(function(module) {
  const contactController = {};

  contactController.initContact = function(){
    $('.tab-content').hide();
    $('#contact-page').fadeIn(350);
  }

  module.contactController = contactController;
})(app);
