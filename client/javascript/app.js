'use strict';
var color = $('.selected').css('background-color');
var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
var lastEvent;
var mouseDown = false;
var canvas = document.getElementById('clear');
var $removeColor = $('#removeSelected');
var $newFact = $('#randomFact');

// When clicking on control list items,
$('.controls').on('click', 'li', function(){
  // deselects sibling elements or
  $(this).siblings().removeClass('selected');
  // selects clicked element
  $(this).addClass('selected');
  // Caches current color
  color = $(this).css('background-color');
});
  
// When 'Create Color' is clicked,
$('#revealColorSelect').click(function(){
  // shows or hides the color select
  changeColor();
  $('#colorSelect').slideToggle(200);
});

// Updates the new color span
function changeColor() {
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
  $('#newColor').css('background-color', 'rgb(' + r + ',' + g +', ' + b + ')');
}

// When color sliders change
$('input[type=range]').change(changeColor);

// When 'Add Color' is pressed
$('#addNewColor').click(function(){
  // append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor);
  // Selects the new color
  $newColor.click();
});

// On mouse events on the canvas,
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  // draws lines
  if(mouseDown) {
    // increases size of brush by setting to range's value
    context.lineWidth = $('#brushSize').val();
    // 'round' prevents jagged lines
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

// Clears the canvas
document.getElementById('clearCanvas').addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// Removes selected elements  
$removeColor.click(function() {
  $('.selected').remove();
  // Applies class to first element in unordered list
  $('.controls ul li').first().addClass('selected');
});

// Alerts a random fact from the database
function generateNumber() {
  return Math.floor((Math.random() * 6));
}

$newFact.click(function() {
  var ourIndex = generateNumber();  
  $.ajax({url: '/fact/' + ourIndex, success: function(result) {
   alert(result);
  }})
});
