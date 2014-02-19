var eco = require('eco');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = eco.precompile(source);
  return 'module.exports = ' + template;
};
