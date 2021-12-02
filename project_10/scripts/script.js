/**
 * Working with function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// function Declaration
function doSomeMath(a, b) {
    let c = a + b
    return c
}

// function expression
const doMoreMath = function(a, b) {
    let c = a * b
    return c
}

console.log(doSomeMath)
console.log(`Do some math: ${doSomeMath(5, 6)}`) // Expected outcome {11}

console.log(doMoreMath)
console.log(`Do more math ${doMoreMath(2, 8)}`) // Expected outcome {16}

// Immediately Invoked Function Expression (IIFE)
(function() {
    let a = 4;
    let b = 6;
    let c = doSomeMath(a, b);
    console.log(`The sum of a and b is: ${c}`);
})(); // Invoked functions do not seem to return console.log data