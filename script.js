let button = document.querySelector("#darkmode") ;
let silly = document.querySelector("#lightmode") ;
let crazy = document.querySelector("#nextpage") ;
let back = document.querySelector("#lastpage") ;
let social = document.querySelector("#socialmedia")
let media = document.querySelector("#media")
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

  function myFunction() {
    var x = document.getElementById("snackbar");
    {x.className = "show";
  
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  
  function handleClicklastpage(){
    alert('Returning to home')
  }

  function handleClicksocialmedia(){
    alert('Onto my socials')
  }

  function handleClickmedia(){
    alert('Onto my socials')
  }
 
  // Add the click event listener
  button.addEventListener('click', handleClick);
  silly.addEventListener('click', handleClicklightmode);
  crazy.addEventListener('click', handleClicknextpage);
  back.addEventListener('click', handleClicklastpage);
  social.addEventListener('click', handleClicksocialmedia);
  media.addEventListener('click', handleClickmedia);

