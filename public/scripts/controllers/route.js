'use strict';

// Using page.js as middleware to route traffic to these callback functions
page('/', app.projectController.initProject);
page('/about', app.aboutController.initAbout);
page('/contact', app.contactController.initContact);

page();
