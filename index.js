var express = require('express');
var arduino = require('duino'),
  board = new arduino.Board();

var app = express();




board.on('ready', function(){

  app.get('/on', function(req, res) {
//  res.send([{name:'wine1'}, {name:'wine2'}]);

    var toSend = 1;
    board.write(parseInt(toSend));
    console.log(toSend);
  });

  app.get('/off', function(req, res) {
//  res.send([{name:'wine1'}, {name:'wine2'}]);

    var toSend = 0;
    board.write(parseInt(toSend));

    console.log(toSend);
  });

});

board.on('data', function(m){
  console.log('received data serial arduino : ');
  console.log(m);
});

app.listen(3000);
console.log('Listening on port 3000...');