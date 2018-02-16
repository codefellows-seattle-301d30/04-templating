'use strict';

let articles = [];

function Article (rawDataObj) {
  for(let key in rawDataObj){
    this[key] = rawDataObj[key];
  }
}

Article.prototype.toHtml = function() {
  // DONE: Use Handlebars to render your articles. Get your template from the DOM and "compile" your template with Handlebars.

  //Get the template from the HTML
  let $template = $('#article-template').html();

  //Use Handlebars to compile the HTML , returns a funciton
  let templateRender = Handlebars.compile($template);

  // REVIEW: If your template will use properties that aren't on the object yet, add them.
  // Since your template can't hold any JS logic, we need to execute the logic here.
  // The result is added to the object as a new property, which can then be referenced by key in the template.
  // For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);


  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // REVIEW: The ternary operator above accomplishes this same logic.
  // if(this.publishedOn) {
  //   this.publishStatus = `published ${this.daysAgo} days ago`;
  // } else {
  //   this.publishStatus = '(draft)';
  // }

  // DONE: Use the method that Handlebars provides to return your filled-in html template for THIS article.

  //Return the complied HTML
  return templateRender(this);

}

// COMMENT: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?

// Because the sort method takes just two arguments, which are a,b in this case (hence the parens). Versus the use of the the "articleObject" and "article in the .forEach method which only needs one parameter.

//In the case of the this constructor function and it's resulting object instances, this .sort() method needs to compare two object instance's properties from the object array and 'a,b' is a shorthand to do so without having to call each instance of the array.

rawData.sort((a,b) => {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

articles.forEach(article => {
  $('#articles').append(article.toHtml());
});
