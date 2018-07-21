'use_strict';

exports.render = function(params) {
  return(`
          <form class='query-form'>

            <input type='text' autofocus='true' class='mat-input'></input> 

            <input type='submit' class='mat-input' id='mat-submit'></input> 
          </form>
         `);
};

exports.style = function() {
  return(`.query-form{
            width: 100%;
          }
          .mat-input{
            height: 30px;
            width: calc(100% - 4px) ;
            padding: 0px;
            box-shadow: 1px 1px 1px 0 #cccccc;
            box-sizing: border-box;
            border-radius: 0px;
            border: 1px solid #bbb;
            margin-bottom: 15px;
          }
          #mat-submit{
            background: #D4E4F7;
          }
         `);
};
