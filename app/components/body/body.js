'use strict';
var header = require('./header/header.js');

exports.render = function(params) {
  return(`${header.render()}
          <h3>Enter your </h3>`);
};
