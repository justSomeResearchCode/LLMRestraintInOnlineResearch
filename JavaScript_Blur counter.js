
// Counter for the number of times that participants leave the page
// Declaring a variable for counting up the number of times, participants left study page, 
// how long participants left study page and a start and end timestamp variable
let counterPageLeave = 0;
let secondsOutsideWindow = 0;
let startSecondsOutsideWindow = 0;
let endSecondsOutsideWindow = 0;

// Send your initial values to your survey tool database here

// Insert JavaScript code for blocking cut, copy, paste commands here

// EventListener counting variable counterPageLeave if webpage is blurred
document.addEventListener("blur", (event) => {
    counterPageLeave = counterPageLeave + 1;
    
    // Implement the handler for variable counterPageLeave right here
    
    // Takes unix timestamp in seconds for blurring of web page
    startSecondsOutsideWindow = Math.floor(Date.now() / 1000);
});

// EventListener that stops time counter outside the study’s web page when participants refocus on web page
document.addEventListener("focus", (event) => {
    
    // Takes unix timestamp in seconds for focus of web page
    endSecondsOutsideWindow = Math.floor(Date.now() / 1000);
   
    // Calculates time difference between leaving and refocus
    if (counterPageLeave > 0) {
        secondsOutsideWindow = secondsOutsideWindow +    endSecondsOutsideWindow - startSecondsOutsideWindow;
    }
    if (counterPageLeave === 0) {
        secondsOutsideWindow = 0;
    }
    
    // Implement the handler for variable secondsOutsideWindow right here

});

