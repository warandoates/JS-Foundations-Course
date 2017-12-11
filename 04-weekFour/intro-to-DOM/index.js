console.log("We're Connected!!!");

// Link the css page to the html document
// Link this javascript to the html document

// Link a new font to the page using a google font

// Target the header text and make sure it is centered.
// Give the header a background color of black
// give the header text a color of white
// add the header class to the header


let header = document.getElementById('header');
console.log(header);
header.style.textAlign = 'center';
header.style.backgroundColor = 'black';
header.style.color = 'white';
header.className = 'navbar';




// add pointer when hovering on buttons and change color using tagName
let button1 = document.getElementsByTagName('button')[0];
button1.addEventListener('mouseenter', buttonPointer);
button1.addEventListener('mouseleave', buttonLeave);
button1.addEventListener('click', addBoldText);

let button2 = document.getElementsByTagName('button')[1];
button2.addEventListener('mouseenter', buttonPointer);
button2.addEventListener('mouseleave', buttonLeave);
button2.addEventListener('click', addItalicText);

function buttonPointer(evt) {
event.target.style.backgroundColor = 'green';
event.target.style.cursor = 'pointer';
}

function buttonLeave(evt) {
  event.target.style.backgroundColor = 'blue';
}


// add bold to the first column when bold button is clicked
// after extending to affect all text, show alternative by addding classes using classList
function addBoldText(evt) {
  let columnOne = document.getElementsByClassName('col1');
  for (var i = 0; i < columnOne.length; i++) {
    if (columnOne[i].style.fontWeight === 'bold') {
      columnOne[i].style.fontWeight = 'normal';
    } else {
      columnOne[i].style.fontWeight = 'bold';
    };
  };
}

function addItalicText(evt) {
  let columnTwo = document.getElementsByClassName('col2');
  for (var i = 0; i < columnTwo.length; i++) {
    if (columnTwo[i].style.fontStyle === 'italic') {
      columnTwo[i].style.fontStyle = 'normal';
    } else {
      columnTwo[i].style.fontStyle = 'italic';
    };
  };
}
