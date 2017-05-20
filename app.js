'use strict';

// Justin pointed out I should move my projects variable out of the global namespace
// by attaching it as a methond to my Project constructor

let projects = [];

// Justin brought up let versus var and how I should change my code to use let instead.

function Project(rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

Project.prototype.toHtml = function() {
  // REVIEW: This method on each instance of Project allows that object to create its own HTML
  // 1. Get the template from the HTML document
  let template = $('#project-template').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

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

Project.initProjectPage = function (){
  projects.forEach(function(myNewProjectObject){
    $('#projects').append(myNewProjectObject.toHtml());
  });
}

Project.loadAll = function(rawData) {


  rawData.forEach(function(object) {
    projects.push(new Project(object));
  })
}

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    // When rawData is already in localStorage,
    // we can load it with the .loadAll method above,
    // and then render the project page (using the proper method on the Project object).
    Project.loadAll(JSON.parse(localStorage.rawData));
    // articleView.initIndexPage(localStorage.rawData); <-- Keeping for reference
    // Method called to render the project page
    Project.initProjectPage();

  } else {
    // If we don't already have the rawData, we retrieve it from mthe JSON file
    // from the server with AJAX (using $.getJSON()), then cache it in localStorage
    // so we can skip the server call next time (and speed things up),
    // then load all the data into the projects array with the Project.loadAll method
    // and then render the project page.
    $.getJSON('/projectData.json')
      .then(function(data){
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);
        Project.initProjectPage();
      },
      function(err){
        console.log(err, 'error in fetchAll else statement');
      })
  }
}
