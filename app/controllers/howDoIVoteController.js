'use strict';
var application = require('../components/application.js');

exports.root = function(req, res) {
  res.send(application.render(req.params));
};
