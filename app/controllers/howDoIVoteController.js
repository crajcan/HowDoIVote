'use strict';
html = require('../components/html');

exports.root = function(req, res) {
  res.send(html.render(req.params));
};
