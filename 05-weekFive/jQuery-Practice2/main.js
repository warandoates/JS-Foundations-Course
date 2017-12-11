/*
=======================================================

** Week 5 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.
$(document).ready(function() {


//1.
  $('.alertme').click(() => {
      alert('jQuery seems easy so far!');
  });

//2.
  $('.clickme').click(() => {
      $('.clickme').text('I was clicked!');
  });

//3.

$('.addStyle').click(() => {
    $('button').each((index, value) => {
        $(value).addClass('buttonStyle');
    })
});

//4.
$('button.addDifferentStyle').click(() => {
    $('button.addDifferentStyle').addClass('addUniqueStyle');
});

//5.
$('.removeBtn').click(() => {
  $('button').each((index, value) => {
      $(value).removeClass('buttonStyle addUniqueStyle');
  });
});

//6.
$('.clickToggle').click(() => {
    $('.clickToggle').toggleClass('buttonStyle');
})

//7.
$('.squareBtn').click(() => {
  $('.square').hide();
});


//8.
$('.circle').click(() => {
  $('.circle').hide();
});


//9.
$('.toggleRedSquare').click(() => {
  $('.redSquare').toggle(1500);
});


});  // Close: $(document).ready(function() {
