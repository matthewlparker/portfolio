'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

  aboutController.initAbout = function(){
    $('.tab-content').hide();
    $('#about-me-page').fadeIn(350);
    $('#about').fadeIn(350);

    app.repos.requestRepos(app.repoView.index);
  }


  module.aboutController = aboutController;
})(app);
