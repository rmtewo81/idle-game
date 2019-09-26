var score = 1; // Create a variable to store the score in

var title = new Title('The Ether'); // Create a title element
var button = new Button('Start', );   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text("Welcome.");                    // Create a text element
var scr = new Text("Here you can be whoever you want to be."); 
var scr = new Text("Now begin your journey.");

createButton('Materials' ); // Make a button
createButton('Restart' ); // Make a button
createButton('Build' ); // Make a button
changeTitle('Clicker Game');

function btnPress() {
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
