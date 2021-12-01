/**
 *  Scope and the var statement
 *
 *
 */

var color = 'purple';

document.querySelector('.left').style.backgroundColor = color;
document.querySelector('.left .color-value').innerHTML = color;

color = 'skyblue';

// Valid setup. Function() is called at the end of file
function headingColor() {
  color = 'blue';
  document.querySelector('.title').style.color = color;
}

document.querySelector('.right').style.backgroundColor = color;
document.querySelector('.right .color-value').innerHTML = color;

headingColor(); // This function will run last
