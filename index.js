var express = require('express');
var arduino = require('duino');
var board = new arduino.Board({
  debug: true
});
var app = express();


var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/tty.usbserial-A400fNZR", {
  baudrate: 9600
}, false); // this is the openImmediately flag [default is true]

serialPort.open(function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });

  app.get('/on', function(req, res) {
    serialPort.write("1", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
      console.log( results);
    });
    res.end();
  });

  app.get('/off', function(req, res) {
    serialPort.write("0", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
      console.log( results);
    });
    res.end();
    });
});


app.listen(3000);
console.log('Listening on port 3000...');