'use strict';

var app = app || {};

(function(app) {

  Project.all = [];

  function Project(rawDataObject) {
    for (let key in rawDataObject) {
      this[key] = rawDataObject[key];
    }
  }

  Project.prototype.toHtml = function() {

    let template = $('#project-template').html();
    let templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  $(document).ready(function(){
    $('.tab-content').hide();
    $('#projects').show();
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
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.initProjectPage();
    } else {
      $.getJSON('/data/projectData.json')
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
