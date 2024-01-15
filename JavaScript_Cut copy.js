// Cancels cut commands on a web page
document.addEventListener("cut", function(cutCommand) {
    cutCommand.preventDefault();
});

// Cancels copy commands on a web page
document.addEventListener("copy", function(copyCommand) {
    copyCommand.preventDefault();
});

// Cancels paste commands on a web page
document.addEventListener("paste", function(pasteCommands) {
    pasteCommands.preventDefault();
});
