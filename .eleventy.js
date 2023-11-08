module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("style.css");
  
    return {
      passthroughFileCopy: true
    };
  };
  