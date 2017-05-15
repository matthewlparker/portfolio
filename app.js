'use strict';
// Justin pointed out I should move my projects variable out of the global namespace
// by attaching it as a methond to my Project constructor
var projects = [];

// Justin brought up let versus var and how I should change my code to use let instead.

function Project(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}


Project.prototype.toHtml = function() {
  // REVIEW: This method on each instance of Neighborhood allows that object to create its own HTML
  // TODO: Complete this using Handlebars!!!
  // 1. Get the template from the HTML document
  var template = $('#project-template').html();
  // 2. Use Handlebars to "compile" the HTML
  var templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

projectDataSets.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(myNewProjectObject){
  $('#projects').append(myNewProjectObject.toHtml());
});

$(document).ready(function(){
  $('section').hide();
  $('#projects').show();
});

$('.nav-ul li').on('click', function(){
  $('section').hide();
  if ($(this).hasClass('nav-about')) {
    $('#about-me-page').fadeIn(350);
  } else if ($(this).hasClass('nav-home')) {
    $('#projects').fadeIn(350);
  } else if ($(this).hasClass('nav-contact')) {
    $('#contact-page').fadeIn(350);
  }
});
