'use_strict';
const queryForm = require('./queryForm/queryForm');

exports.render = function(params) {
  return(`<div class="mat-card"> 
            <h3>Whats Your Address?</h3>
            ${queryForm.render()}
          </div>`);
            //Don't know where, or if you're registered?
};

exports.style = function() {
  return(`.mat-card{
            box-shadow: 0 1px 3px 0 #a4a4a4;
            position: relative;
            margin: 10px auto 10px auto;   
            padding: 10px;
            text-align: center;
            max-width: 678px;
          }
          ${queryForm.style()}
         `);
};
