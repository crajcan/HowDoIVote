'use strict';

exports.render = function(styles) {
  return(`<title>Where Do I Vote?</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,900', rel='stylesheet'>
          <style>
            body {
              font-family: 'Roboto';
            }
            ${styles}
          </style>`);
};
