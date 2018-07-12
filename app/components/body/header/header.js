'use strict'

exports.render = function(params) {
  return(`<header>
            <h1 class="app-name">How Do I Vote?</h1>
          </header>`);
};

exports.style = function() {
  return(`header { 
            background: #ff9900;
            color: white;
            text-align: center;
            height: 70px;
          }
          .app-name {
             margin: 0px; 
             padding-top: 10px;
             font-size: 40px;
          }`);
};
