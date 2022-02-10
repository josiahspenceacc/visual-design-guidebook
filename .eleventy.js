// Call plugins and libraries
const markdownIt = require('markdown-it');

module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy('style.css');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('fonts');

  // Setup Markdown Parsing
  const options = {
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  //Filters
  eleventyConfig.addFilter("sortByTitle", values => {
    return values.slice().sort((a, b) => Math.sign(a.data.chapter - b.data.chapter));
  });

  eleventyConfig.addFilter("where2", function (values, prop, val) {
    // Assumes value is a collection. For arrays, remove ".data".
    return values.filter(p => p.data[prop] == val);
  });

};