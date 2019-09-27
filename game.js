var score = 1; // Create a variable to store the score in

var materials = new Button('Materials', mat ); // Make a button
var restart = new Button('Restart' ); // Make a button
var build = new Button('Build' ); // Make a button
var build = new Button('Collect brick', brick ); // Make a button

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
function mat() {
  var list = new HTMLElement('ul'); // make a container for the list
  var listItem1 = new HTMLElement('li', 'leather:0'); // Make a list item
  var listItem2 = new HTMLElement('li', 'metal:0');
  var listItem3 = new HTMLElement('li', 'meat:0');
  var listItem4 = new HTMLElement('li', 'animals:0');
  var listItem5 = new HTMLElement('li', 'guards:0');
  list.add(listItem1); // add the list item to the container
  list.add(listItem2)
  list.add(listItem3)
  list.add(listItem4)
  list.add(listItem5)
}
function brick() {
  var collect = new Text('you have collected 10 brick')
}
function build() {
  var build = new HTMLElement('ul')
  var buildItem1 = new HTMLElement('li', 'house:0')
  var buildItem2 = new HTMLElement('li', 'Fence:0')
  var buildItem1 = new HTMLElement('li', 'house:0')
