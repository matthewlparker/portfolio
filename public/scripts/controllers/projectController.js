'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.initProject = function(){
    $('.tab-content').hide();
    $('#projects').fadeIn(350);
  }

  module.projectController = projectController;
})(app);
