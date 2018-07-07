'use strict'

exports.render = function(params) {
  return(`<header style=${styles}>
            How Do I Vote?
          </header>`);
};

const styles = "background:#ff9900;"+
               "color:white;"+
               "text-align:center;";
