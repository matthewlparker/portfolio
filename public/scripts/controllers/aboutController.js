'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.initAbout = function(){
    $('.tab-content').hide();
    $('#about-me-page').fadeIn(350);
    $('#about').fadeIn(350);

    app.repos.requestRepos(app.repoView.index);
  }

  module.aboutController = aboutController;
})(app);
