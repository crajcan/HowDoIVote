'use strict';
const header  = require('./header/header.js');
const matCard = require('./matCard/matCard.js');

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
