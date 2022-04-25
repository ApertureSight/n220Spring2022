// Create an application with three grey, square divs, in a row. They should be 200px by 200px, \
// and all floated left. Give them a margin of 5px.

// Using only one event handler, write event listeners to respond to a click on each element. 
// Each element should change to a different color: one red, one green, and one blue. 
    // Use a data attribute on the elements to store the color to be changed to.

// The result, after clicking on the first and third, should look something like this:

function changeColor(){
let response = event.target.getAttribute("data-response");
event.target.style.backgroundColor = response;

}

