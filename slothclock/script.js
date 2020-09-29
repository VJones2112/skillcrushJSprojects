<<<<<<< HEAD
// Declare Variables
// Clock Variables
let currentTime, currentHours, currentMinutes, currentSeconds, timeOfDay, currentTimeString; 
// Time Change Variables
let wakeyWakeTime, nappyNapTime, snackySnackTime, displayTime, message, image


// Creates the clock
function updateClock() {
    currentTime = new Date();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();
    
    // Format the time
    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;
    
    // Set up AM PM
    timeOfDay = (currentHours < 12) ? 'AM' : 'PM';
    
    // Use 12 hour clock vs. 24 hour
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    
    // Join time into one string as HH:MM:SS AM/PM
    currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay;
    
    // Display the clock in html
    document.getElementById("runningClock").innerHTML = currentTimeString
};



//Updates clock so it runs seconds continuously 
window.onload = updateClock();
setInterval('updateClock()', 1000)
 


// Changes image depending if it's morning, afternoon, or evening
//let wakeyWakeTime = 4;

/*
var wWT = document.getElementById("wakeTimes");
var wWTResult = '';
if (wWT) {
    wWTResult = wWT.value;
}
var wakeyWakeTimeResult = wWT.options[selectedIndex].value; // throwing an Error "Uncaught ReferenceError: selectedIndex is not defined"
//.value;
console.log(wWT);

*/ //Above was 'working' code, maybe.


// The imageChange function messed up my clock and Party Time image...
function imageChange() {
//    displayTime = new Date().getHours(); //I only care about the hours
    displayTime = currentHours;
    wakeyWakeTime = 8; // works
    nappyNapTime = 12; // works
    snackySnackTime = nappyNapTime + 1; // works
    message = document.getElementById("messageText");
    image = document.getElementById('changeImage');
 

     if (displayTime == wakeyWakeTime) {
     image = 'images/wakesloth.png';
     messageText = 'Rise and shine!';
    }
     else if (displayTime == snackySnackTime) {
     image = 'images/snackysloth.png';
     messageText = 'Time to get your nomnom on!'
    }
     else if (displayTime == nappyNapTime) {
     image = 'images/sleepysloth.png';
     messageText = 'Let\'s snuggle'
    }
    else {
      image = 'images/cutesloth1.png';
        messageText = 'Hey girl.';
    }
    changeImage.src = image;
    message.innerHTML = messageText;
};

imageChange();


// New party image when Party Time! button is pressed
function partyTimeImage() {
    let element = document.getElementById("changeImage");
    element.classList.toggle("partyImage");
=======
// Creates the clock
function updateClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    // Format the time
    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;
    // Set up AM PM
    let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';
    // Use 12 hour clock vs. 24 hour
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    // Join time into one string as HH:MM:SS AM/PM
    let currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay;
    // Display the clock in html
    document.getElementById("runningClock").innerHTML = currentTimeString
}
//Updates clock so it runs seconds continuously 
window.onload = updateClock();
setInterval('updateClock()', 1000)

// Changes image depending if it's morning, afternoon, or evening
//let wakeyWakeTime = 4;
let wakeyWakeTime = document.querySelector('.wake')
let nappyNapTime = 2;
let snackySnackTime = wakeyWakeTime + 2;
let time = new Date().getHours(); //I only care about the hours
//let message;

function imageChange() {
//    if time == wakeyWakeTime {
//        //let wake = document.getElementById("changeImage");
//        //wake.classList.toggle("partyImage");
//        message = document.getElementById("messageText");
//        message = 'Rise and shine!'
//}
    

 if time == wakeyWakeTime {
 document.getElementById('changeImage').src='images/wakesloth.png'
 message = 'Rise and shine!'
}

 if time == snacktime {
 image = snack image
 message = 'Time to get your nomnom on!'
}

 if time == naptime {
 image = napimage
 message = 'Let's snuggle'
}

}

// New party image when Party Time! button is pressed
function partyTimeImage() {
    let element = document.getElementById("changeImage");
    element.classList.toggle("partyImage");
>>>>>>> 7157db445e64e419367e72bb113340567be45559
}