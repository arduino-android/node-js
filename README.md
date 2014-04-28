# Turn on / off a led from an Android App to Arduino in Wifi 
https://github.com/arduino-android/node-js


Android App => (wifi)=> Node Js server => (serial) => Arduino => (electrical) => led


- Android app send http request to the ip adress of the NodeJs server ( the laptop )

- NodeJs server receive the request and send a 0 or 1 to the arduino

- Arduino power on/off the led

- you need a router betwen your Phone and your nodejs server ( pc, raspeberry pi... )


#


a simple led circuit like that ( http://arduino.cc/en/Tutorial/Blink?from=Tutorial.BlinkingLED ) is connected  to the pin 52 (digital ) of my Arduino mega 1280




![alt tag](https://github.com/arduino-android/node-js/blob/master/photo.jpg)


#  Node js Server Instructions
  
  - install node, npm, bower
  - clone the node-js project 
  - npm install 
  - node index.js
 

#  Arduino Instructions

   you can change the pin 52 in the arduino code
   you need to change the the serial port 
   var serialPort = new SerialPort("/dev/tty.usbserial-A400fNZR");
 /dev/tty.usbserial-A400fNZR should be the same that you use in arduino ( tools, serial port , /dev/tty.usbserial-A400fNZR  )
 
#  Android
 
  download it here https://play.google.com/store/apps/details?id=com.damien.holotestandroid.app
  or the code source is here : https://github.com/arduino-android/android

