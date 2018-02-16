# Kilovolt Blog - Lab 04

**Author**: Haron and Suzanne Richman
**Version**: 1.0.5 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview



## Getting Started

The user would need to 
* Create index.html
* Get the icons from IcoMoon
* Get the normalize.css from github.com/necolas/normalize.css
* Search and find images of bacon, baseball, and cats
* Add filler text
* Build CSS files according to SMACSS methodology
* Include link to jQuery library (CDN)
* Create the articles as objects within an array with consistent property values
* Create a constructor function to make the article array accessible to the constructor's method
* Use jQuery to access and clone HTML elements of the DOM and populate those elements with content from the article array
* Create forEach loops to generate new object instances and then append them to the DOM
* Create an array of objects to hold the content generation for the DOM for each object.
* Create a JS file to generate a more interactive view of the DOM (selecting authors, catagories and hiding/showing full articles as well as navigating the long page as if it was a multipage website).
* Add Handlebars library and use it to create a tempalte for the HTML articles. 


## Architecture

We used IcoMoon icon font for navigation icons. We included the jQuery and Handlebars libraies We used Chrome to analyze and inspect. Project is built on HTML, CSS and JavaScript.

## Change Log

02-16-2018 9:45 am - Commit README and added Handlebars library CDN.

02-16-2018 10:19 am - Added Handlebars library and created handlebars template for HTML. Also did first pull request. 

02-16-2018 11:14 am - Updated README. Updated the .toHtml method on the Article constructor function to use Handlebar library to create our template with less code.

02-16-2018 11:14 am - Updated README. Updated converted many functions to arrow functions in the articleView.js. Troubleshot errors in our Handlebar template and found an error in our article.js Article constructor. Removed zombie code. 

## Credits and Collaborations

* Thanks to our instructors and TAs and especially our classmates Austin Matteson and Josh West. 
* We used the jQuery library.
* We referenced the jQuery cheat sheet: https://oscarotero.com/jquery/
* We used HandleBars library.
* We used a normalize.css file found here: github.com/necolas/normalize.css
* We referenced MDN for array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
* We referenced our text book: Jon Duckett - JavaScript and JQuery.