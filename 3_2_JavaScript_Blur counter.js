<!DOCTYPE html>
<html>
<body>
<script>

// Counter for the number of times that participants leave the page
// Declaring a variable for counting up the number of times, participants left study page, 
// how long participants left study page and a start and end timestamp variable
let counterPageLeave = 0;
let secondsOutsideWindow = 0;
let startSecondsOutsideWindow = 0;
let endSecondsOutsideWindow = 0;

// Creates a hidden input field that has the id v_1, if hidden input field is already in place, you should delete this part code
let hiddenInput1 = document.createElement("input"); 
hiddenInput.setAttribute("type", "hidden"); 
hiddenInput.setAttribute("id", "v_1");
document.body.appendChild(hiddenInput1);

// Creates a hidden input field that has the id v_2, if hidden input field is already in place, you should delete this part code
let hiddenInput2 = document.createElement("input"); 
hiddenInput.setAttribute("type", "hidden"); 
hiddenInput.setAttribute("id", "v_2");
document.body.appendChild(hiddenInput2);

// Sending initial values to hidden input fields
document.getElementById("v_1").value = counterPageLeave;
document.getElementById("v_2").value = secondsOutsideWindow;

// Insert JavaScript code canceling cut, copy, paste commands here

// EventListener counting variable counterPageLeave if webpage is blurred
document.addEventListener("blur", (event) => {
    counterPageLeave = counterPageLeave + 1;

    // Implement the handler for variable counterPageLeave right here
    document.getElementById("v_1").value = counterPageLeave;

    // Takes unix timestamp in seconds for blurring of web page
    startSecondsOutsideWindow = Math.floor(Date.now() / 1000);
});

// EventListener that stops time counter outside the study’s web page when participants refocus on web page
document.addEventListener("focus", (event) => {

    // Takes unix timestamp in seconds for focus of web page
    endSecondsOutsideWindow = Math.floor(Date.now() / 1000);
    if (counterPageLeave > 0) { // Calculates time difference between leaving and refocus
        secondsOutsideWindow = secondsOutsideWindow +    endSecondsOutsideWindow - startSecondsOutsideWindow;
    }
    if (counterPageLeave === 0) {
        secondsOutsideWindow = 0;
    }
    
    // Implement the handler for variable secondsOutsideWindow right here    
    document.getElementById("v_2").value = secondsOutsideWindow;

// Displays information for testing, please delete this line and the following lines until document.body.appendChild(element); when not testing
    let element = document.createElement('div');
    element.textContent = "Number of times you left the page: " + counterPageLeave + "; " + "number of seconds you have been outside the page: " + secondsOutsideWindow;
    document.body.appendChild(element);
    // Delete until here if not testing

});

</script> 

</body>
