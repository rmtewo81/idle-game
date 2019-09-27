var score = 1; // Create a variable to store the score in

var materials = new Button('Materials' ); // Make a button
var restart = new Button('Restart' ); // Make a button
var build = new Button('Build' ); // Make a button
var build = new Button('Collect brick' ); // Make a button

var title = new Title('The Ether'); // Create a title element
var button = new Button('Start', button );   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text("Welcome.");                    // Create a text element
var scr = new Text("You will try to survive and progress.");
var scr = new Text("Now begin your journey.");



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

function button() {
  var scr = new Text('Collect brick')
}
