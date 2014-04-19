var express = require('express');
var arduino = require('duino')
var board = new arduino.Board({
  debug: true
});
var app = express();







board.on('connected', function(){
  console.log('connected serial');


    console.log('board ready');

    app.get('/on', function(req, res) {
//  res.send([{name:'wine1'}, {name:'wine2'}]);

      var toSend = 1;
      board.write("1111111111111111111");
      console.log(toSend);
      res.end();
    });

    app.get('/off', function(req, res) {
//  res.send([{name:'wine1'}, {name:'wine2'}]);

      var toSend = 0;
      board.write("0000000000000000000");

      console.log(toSend.toString());
      res.end();

    });

});

    board.on('message', function(m){
      console.log('received data serial arduino : ');
      console.log(m);
    });





//});



app.listen(3000);
console.log('Listening on port 3000...');