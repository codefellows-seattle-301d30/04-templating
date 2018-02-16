# Project Name   Lab 04 - templating with Handlebars.  

**Author**: Zachary Schumpert and Patricia Raftery
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
  This application allows a user to access over 200 blog articles from one website.  The blog articles cover a number of topics.  The user can filter through all the available blog articles by author or by category, via the two drop down menus at the top of the application.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
The user will need to refactor all of their functions to arrow functions (=>).  They'll also need to add a url to the author name.  Have a separate image folder to hold all the article images and fonts from icomoon.io.  Use multiple .js files to hold the blog article data and the different ways they will access and organize that information.  

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
We refactored our current code to utilize jQuery and Handlebars. We used html, css, and markdown. This application is a blog of various ipsums. This application is design with mobile first in mind, and extra css code for desktop viewers, with a breakpoint at 640px. The mobile viewers, to maximize screen space, start with the dropdown menu hidden, and the menu becomes visible when the hamburger icon is hovered over. The desktop viewers do not see the hamburger icon, and can see the nav menu from the beginning.

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

02-16-2018 9:17am - linked handle bars to html and changed template to handlebars
02-16-2018 9:30am - filled in the constructor function prototype to get and compile to html
02-16-2018 9:45am - saving current status
02-16-2018 10:15am - updated template so it resembled the previous lab's template
02-16-2018 10:30am - added url to author name
02-16-2018 10:40am - converted a function to an arrow function
02-16-2018 10:55am - refactored to use arrow functions, answered comment
02-16-2018 11:00am - userstories
02-16-2018 11:15am - README.md
02-16-2018 11:30am - Push/Pull submit assignment.


## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Sources:
icomoon.io
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Examples
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
http://handlebarsjs.com/