'use strict';

var projects = [];

function Project(projectData){
  this.title = projectData.title,
  this.src = projectData.src;
  this.image = projectData.image,
  this.description = projectData.description;
}

Project.prototype.toHTML = function(){
  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');

  $newProject.find('.project-title').html(this.title);
  $newProject.find('.project-src').attr('href', this.src);
  $newProject.find('.project-image').attr('src', this.image);
  $newProject.find('.project-description').html(this.description);


  return $newProject;

}

$(document).ready(function(){
  $('section').hide();
  $('#projects-page').show();
})

projectDataSets.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects-page').append(project.toHTML());
});


$('.nav-ul li').on('click', function(){
  $('section').hide();
  if ($(this).hasClass('nav-about')) {
    $('#about-me-page').fadeIn(350);
  } else if ($(this).hasClass('nav-home')) {
    $('#projects-page').fadeIn(350);
  } else if ($(this).hasClass('nav-contact')) {
    $('#contact-page').fadeIn(350);
  }
});
