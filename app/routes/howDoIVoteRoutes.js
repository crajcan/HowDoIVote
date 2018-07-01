'use strict';

module.exports = function(app) {
  var howDoIVote = require('../controllers/howDoIVoteController.js');

  app.route('/').get(howDoIVote.home);
   
};
