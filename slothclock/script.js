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
}