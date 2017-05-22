'use strict';

var app = app || {};
  // Justin pointed out I should move my projects variable out of the global namespace
  // by attaching it as a methond to my Project constructor


  // Justin brought up let versus var and how I should change my code to use let instead.
(function(app) {

  Project.all = [];

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
    Project.all.forEach(function(myNewProjectObject){
      $('#projects').append(myNewProjectObject.toHtml());
    });
  }

  Project.loadAll = function(rawData) {

    Project.all = rawData.map(function(project) {
      return new Project(project);
    })

    console.table(Project.all);

    console.log(`Fun fact! There are: ${Project.all.map(function(project){
      return project.description.split(' ').length;
    }).reduce(function(acc, curr){
      return acc + curr;
    })} total words in all my project descriptions combined!`)


  // Leaving the following code in for review:

  //   rawData.forEach(function(object) {
  //     Project.all.push(new app.Project(object));
  //   })

  //Matthew, I think the above code doesn't needs to be included... the fact that you used .map() that is taking the place of forEach method... Not necessary and I believe this can be thrown out... Refer to labs 09 and 10 and we are just using map()
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
  app.Project = Project;
})(app)

//great job on wrapping all of this!!
