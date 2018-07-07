'use strict';
var header = require('./header/header.js');

exports.render = function(params) {
  return(`<body style="margin:0px;">
            ${header.render()}
            <h3>Enter your </h3>
          </body>`);
};
