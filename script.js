let button = document.querySelector("#darkmode") ;
// select the element with id of darkmode

// Function to handle button click
function handleClick() {
    //select the body
    //add dark mode class to the body
    alert('Button was clicked!');
    //add a class
    document.querySelector("body").style.cssText = "color: white; background-color: black;"
  }
 
  // Add the click event listener
  button.addEventListener('click', handleClick);
  