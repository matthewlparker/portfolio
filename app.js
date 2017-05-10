'use strict';

function Project(title, description, img, src){
  this.title = title,
  this.description = description,
  this.img = img,
  this.src = src;
}

var projects = [];

Project.prototype.toHTML = function(){
  $newArticle.find('a').html(this.author);
}


// new Project('Guardians of the Goats', 'goats in need deserve a guardian indeed', img, src);
