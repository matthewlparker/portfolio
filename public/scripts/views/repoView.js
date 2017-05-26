'use strict';

var app = app || {};

(function(module) {
  const repoView = {};
  const ui = function() {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  let render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    console.log('repoView', app.repos.with('name'));
    ui();
    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
