var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var scr = new Text(score);                     // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score--;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
