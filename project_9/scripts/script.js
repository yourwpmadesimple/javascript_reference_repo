/**
 * Aray methods
 * 
 * 
 * 
 */

const deskArray = [
    'pen',
    'camera',
    'phone',
    'notebook',
    'headphones',
    'lightbulb',
    'USB drive'
]

console.log('Original Array: ', deskArray)

// Remove last item
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

console.log(`The value of the last item in the Array: ${deskArray.pop()}`)

console.log(`The value of the first item in the Array: ${deskArray.shift().toUpperCase()}`)

let removeFirstValue = deskArray.unshift('eraser')

console.log(`Should add a new value to the beginning of the Array ${removeFirstValue}`)

console.log(deskArray)

// deskArray.pop()
// console.log('New Array ', deskArray)

// Remove last item and add it as first item
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// deskArray.unshift(deskArray.pop())
// console.log('New Array ', deskArray)

// Sort list in alphabetical order
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// deskArray.sort()
// console.log('New Array ', deskArray)

// Find text string
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// let foundItems = deskArray.find((item) => item === "notebook")
// console.log('New Array ', foundItems.toUpperCase())

// deskArray.sort()
// console.log('New Array ', deskArray)

// Find text string
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

let foundItems = deskArray.find((item) => item === "notebook")
console.log('New Array ', foundItems.toUpperCase())