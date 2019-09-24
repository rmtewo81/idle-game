var score = 1; // Create a variable to store the score in

var title = new Title('Story'); // Create a title element
var button = new Button('Start', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

createButton('Materials', btnPress); // Make a button
createButton('Restart', btnPress); // Make a button
changeTitle('Clicker Game');

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}

function increment() {
  score++;
}
