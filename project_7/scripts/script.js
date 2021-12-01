/**
 *  Local scope 'let'
 *
 *
 */

var color = 'purple';

document.querySelector('.left').style.backgroundColor = color;
document.querySelector('.left .color-value').innerHTML = color;

color = 'skyblue';

function headingTitle() {
    let titleColor = 'blue';
    document.querySelector('.title').style.color = titleColor;
    console.log(`inside ${titleColor}`);
}
headingTitle();

// console.log('side', titleColor) // This will throw an error of undefined titleColor and the code stops excuting and resolves to the css definition for the code below.

document.querySelector('.right').style.backgroundColor = color;
document.querySelector('.right .color-value').innerHTML = color;

console.log('side', titleColor); // This will throw and error Uncaught ReferenceError: titleColor is not defined. However, all the Javascript above will execute just fine.