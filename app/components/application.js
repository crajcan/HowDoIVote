'use strict';
var head = require('./head/head.js');
var body = require('./body/body.js');

exports.render = function(params) {
  return(`<!DOCTYPE html>
          ${head.render()} 
          ${body.render()}`); 
};
