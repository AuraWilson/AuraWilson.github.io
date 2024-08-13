let button = document.querySelector("#darkmode") ;
let silly = document.querySelector("#lightmode") ;
let crazy = document.querySelector("#nextpage") ;
let back = document.querySelector("#lastpage") ;
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
    document.querySelector("body").style.cssText = "color: black; background-color: rgb(197, 222, 205);"
  }

  function handleClicknextpage(){
    alert('Onto the next page')
  }
  
  function handleClicklastpage(){
    alert('Returning to home')
  }
 
  // Add the click event listener
  button.addEventListener('click', handleClick);
  silly.addEventListener('click', handleClicklightmode);
  crazy.addEventListener('click', handleClicknextpage);
  crazy.addEventListener('click', handleClicklastpage);