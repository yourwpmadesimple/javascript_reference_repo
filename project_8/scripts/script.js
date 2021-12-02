/**
 *  Arrrays: assignments, changes
 *
 *
 */

const items = ['apple', 'pen', 3, true, 'mittens']

items.push('Wayne')
console.log(items);
items[2] = 'Chicago';
let newItem = items;
console.log(items);
let anotherNewItem = items.pop()
console.log(`"${newItem}" was added to the 3rd posistion in the array and ${anotherNewItem} was removed from the end`);