'use strict';
var header  = require('./header/header.js');
var matCard = require('./matCard/matCard.js');

exports.render = function(params) {
  return(`<body>
            ${header.render()}
            ${matCard.render(params)}
          </body>`);
};

exports.style = function() {
  return(`${header.style()}
          body { 
            margin: 0;
          }
          ${matCard.style()}
          `);
}
