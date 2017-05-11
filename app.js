'use strict';

// var neighborhoods = [];
//
//


var projects = [];

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










//
// Project.prototype.toHTML = function(){
//   $('.project-title').html(this.title);
//   $('.project-src').attr('href', this.src);
//   $('.project-image').attr('src', this.image);
//   $('.project-description').html(this.description);
// }

// $(document).ready(function(){
//   $('section').hide();
//   $('#projects').show();
// //   new Project('Guardians of the Goats','https://cadburylion.github.io/', 'images/GoG.png', 'goats in need deserve a guardian indeed').toHTML()
// // })
// });

$('.nav-ul li').on('click', function(){
  console.log('click');
  $('section').hide();
  if ($(this).hasClass('nav-about')) {
    $('#about-me-page').fadeIn(350);
  } else if ($(this).hasClass('nav-home')) {
    $('#projects-page').fadeIn(350);
  } else if ($(this).hasClass('nav-contact')) {
    $('#contact-page').fadeIn(350);
  }
});
