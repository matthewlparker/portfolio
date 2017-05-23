'use strict';

var app = app || {};

(function(module) {
  const projectController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

  projectController.initProject = function(){
    $('.tab-content').hide();
    $('#projects').fadeIn(350);
  }

  module.projectController = projectController;
})(app);
