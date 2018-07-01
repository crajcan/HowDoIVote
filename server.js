var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  routes = require('./app/routes/howDoIVoteRoutes.js');

routes(app);
app.listen(port);

console.log('HowDoIVote started on port ' + port);

