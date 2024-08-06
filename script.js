let button = document.querySelector("#darkmode") ;
let silly = document.querySelector("#lightmode") ;
// select the element with id of darkmode

// Function to handle button click
function handleClick() {
    //select the body
    //add dark mode class to the body
    alert('Button was clicked!');
    //add a class
    document.querySelector("body").style.cssText = "color: white; background-color: black;"
  }

  function handleClicklightmode(){
    alert('Button was clicked!')
    document.querySelector("body").style.cssText = "color: black; background-color: white;"
  }
 
  // Add the click event listener
  button.addEventListener('click', handleClick);
  silly.addEventListener('click', handleClicklightmode);
  