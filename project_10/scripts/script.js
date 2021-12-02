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

console.log(`Do some math: ${doSomeMath(5, 6)}`)
console.log(`Do more math ${doMoreMath(2, 8)}`)