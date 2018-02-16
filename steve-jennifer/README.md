# Project Name

**Author**: Jennifer Williams Piper and Steven Starwalt
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

This is a fun website containing a blog with content that is appealing to the user,and easy to use, to entice the user to come back regularly. It should also ensure that the user has a similar experience on desktop and mobile devices, and allows the user to filter articles by author or category.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
* Get starter code from this repo: https://github.com/codefellows-seattle-301d30/04-templating
* Link Handlebars CDN from https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js 

* Convert HTML template to Handlebars template in index.html.

* Add JS code to compile and render the Handlebars template.

* Refactor functions to arrow functions where possible.


## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
Uses HTML, CSS, JavaScript (ES6), jQuery, Markdown.
Uses Handlebars library to dynamically render templates.

Blog articles are stored as objects in the rawData array. They are appended to the DOM using jQuery traversal and setter methods in article.js.  Each article displays author, title, link to author page, time since publication, and blog entry. articleView.js contains code to populate author and category filters, and show or hide appropriate articles depending on user input.

## Change Log
0924 Setup the tree
0947 first swing at the article template complete
1006 compiled with handlebars and it works
1030 finished the handlebars compiling and added the days ago script to the HTML.
1116 added data-author attribute to article template so author filter works. Answered question about 'this' scope in arrow functions
1130 refactored appropriate functions to arrow functions.
1140 updated README

## Credits and Collaborations
* Used the article HTML from yesterday's lab for the article template.
* Starter code from: https://github.com/codefellows-seattle-301d30/04-templating
* Handlebars CDN from https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js