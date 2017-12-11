// STEP 1: Connect css page with html page

// STEP 2: Connect JS Page with html page
  // If succussful, you should see the console.log below in the browser console
console.log("Connected!!!");

// STEP 3: Add some fonts
// Link a new font to the page using a google font and have h2 be that font family

// STEP 4: Fix the headers
let header = document.getElementById('header');
  header.style.textAlign = 'center';
  header.style.backgroundColor = 'black';
  header.style.color = 'white';
  header.classList.add('navbar');
  // Target the header text and save to a variable using the id
  // have the header text be aligned to the center
  // Give the header a background color of black
  // give the header text a color of white
  // add a class to the header and have it equal to the string 'navbar'


// STEP 5: Target the buttons
  let button1 = document.getElementsByTagName('button')[0];
  let button2 = document.getElementsByTagName('button')[1];
  button1.innerText = 'bold';
  button1.addEventListener('mouseenter', addPointer);
  button2.addEventListener('mouseenter', addPointer);

  button1.addEventListener('mouseleave', removeColor);
  button2.addEventListener('mouseleave', removeColor);

function removeColor(evt) {
  evt.target.style.backgroundColor = 'blue'
}

  function addPointer(event) {
    event.target.style.cursor = 'pointer';
    event.target.style.backgroundColor = 'green';
  }
  // target both buttons using the tagName method
  // save both buttons to variable names
  // give the first button the text "bold"

// STEP 6: Add pointers to buttons when moving mouse over
  // Identify the event type that will fire the function to change the cursor/pointers
  // add an eventListener with the event DOCTYPE
  // write a function skeleton and pass in the name of the function as an argument to the event handler
  // when the mouse is over the button, have the background color turn green
  // when the mouse is over the button, the cursor should change to to a pointer
  // when the mouse is outside the button, the background color should turn back to blue

// Step 7: Add bold text
button1.addEventListener('click', changeBoldText)
function changeBoldText(event) {
  let col2Arr = document.getElementsByClassName('col2');
  console.log('this is the second column p tag arr', col2Arr)
  for (var i = 0; i < col2Arr.length; i++) {
    let element = col2Arr[i];
    element.classList.add('col1');
    console.log('one element ata time', element)
  }
  console.log(col2Arr, 'this is after the loop')
let textArr = document.getElementsByClassName('col1');

// let textArr = document.getElementsByTagName('p');
console.log('this is textArr', textArr)
  for (var i = 0; i < textArr.length; i++) {
    let element = textArr[i];
    if(element.style.fontWeight === 'bold') {
        element.style.fontWeight = 'normal';
    } else {
      element.style.fontWeight = 'bold';
    }
  }
}

  button2.addEventListener('click', changeItalicText);
  function changeItalicText() {
    let col2Arr = document.getElementsByClassName('col2');
    for (var i = 0; i < col2Arr.length; i++) {
      if(col2Arr[i].style.fontStyle === 'italic') {
        col2Arr[i].style.fontStyle = 'normal';
      } else {
        col2Arr[i].style.fontStyle = 'italic'
      }
    }
  }

  // When the bold button is clicked, call a function that turns the text in the left column from normal to Bold
  // Be sure to target the text using the class
  // If this button is clicked again, the left column text should change from bold to normal


// Step 8: Add Italic text
  // Follow similar logic to the second button as with the first button but make the text italic, not bold
