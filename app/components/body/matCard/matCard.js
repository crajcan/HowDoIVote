'use_strict';

exports.render = function(params) {
  return(`<div class="mat-card"> 
            <h3>Are You Registered?<h3>
          </div>`);
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
         `);
};
