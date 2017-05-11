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
  $('.project-image').html(this.image);
  $('.project-description').html(this.title);
}


new Project('Guardians of the Goats','https://cadburylion.github.io/', 'images/GoG.png', 'goats in need deserve a guardian indeed');
