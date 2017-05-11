'use strict';

function Project(title, src, image, description){
  this.title = title,
  this.src = src;
  this.image = image,
  this.description = description;
}

var projects = [];

Project.prototype.toHTML = function(){
  $('.project-title').html(this.title);
  $('.project-src').attr('href', this.src);
  $('.project-image').attr('src', this.image);
  $('.project-description').html(this.description);
}

$(document).ready(function(){
  new Project('Guardians of the Goats','https://cadburylion.github.io/', 'images/GoG.png', 'goats in need deserve a guardian indeed').toHTML()
})

$('.nav-ul li').on('click', function(){
  $('section').hide();
  if ($(this).hasClass('nav-about')) {
    $('#about-me').fadeIn(350);
  } else if ($(this).hasClass('nav-home')) {
    $('#projects-page').fadeIn(350);
  } else if ($(this).hasClass('nav-contact')) {
    $('#contact-page').fadeIn(350);
  }
});
