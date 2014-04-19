# on off

Node js Server


Android App => (wifi)=> Node Js server => (serial) => Arduino => (electrical) => led


# Android app send http request to the ip adress of the NodeJs server ( the laptop )

# NodeJs server receive the request and send a 0 or 1 to the arduino

# Arduino power on/off the led

###

a simple led circuit like that ( http://arduino.cc/en/Tutorial/Blink?from=Tutorial.BlinkingLED ) is connected  to the port 52 (digital ) of my Arduino mega 1280
you can change this port in the arduino code

you can download the Android Test App : https://play.google.com/store/apps/details?id=com.damien.holotestandroid.app