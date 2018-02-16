# Kilovolt Blog

**Author**: Kris Sakarias
**Author**: Mikayla Mehelich
**Version**: 1.0.3 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview

Kilovolt Blog is a blog that shows articles with the ability of filtering articles by author and category. Articles are listed in order by most recent date published, have a responsive read-more button that expands to show entire article, and a read-less button to show only a preview of the article text. Tab navigation allows navigation between articles and an about section.

## Getting Started

To build this app, a user must create the previous iteration of the project and then utilize a handlebars template to responsively render each object with the appropriate data.


## Architecture

This blog is powered by jQuery and a Handlebars template. jQuery targets the proper data and elements in the html and the data can be passed into the template and rendered into each instance of article object. The filters filter data for articles that are written by a single author, or a single category using the data that is passed into the filter functions using jQuery.

## Change Log

9:30 - Included handlebars library, refactored arrow functions, and created handlebars template.
10:00 - Render the template so that each article displays with the correct information
10:30 - Fixed filter so that filter menus populate.
11:00 - Got everything functioning including all filters - author filter required quotes surrounding the data, which took a while to figure out with help from multiple people.

## Credits and Collaborations

normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css
