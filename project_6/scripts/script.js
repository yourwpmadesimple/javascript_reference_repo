/**
 *  Scope and the var statement
 *
 *
 */

var color = 'purple';

document.querySelector('.left').style.backgroundColor = color;
document.querySelector('.left .color-value').innerHTML = color;

color = 'skyblue';

// Scope collision
function headingColor() {
  color = 'blue';
  document.querySelector('.title').style.color = color;
}
headingColor(); // var is reset here, changing the value of blue to var in the function

document.querySelector('.right').style.backgroundColor = color;
document.querySelector('.right .color-value').innerHTML = color;
