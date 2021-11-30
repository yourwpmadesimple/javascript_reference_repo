const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'gray',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function () {
    return (this.lidOpen = true);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newColor: function () {
    return (this.color = 'blue');
  },
};
console.log('The backpack object: ', backpack);
console.log(
  'A property of the backpack object (pocketNum): ',
  backpack.pocketNum,
);
console.log(
  'A method of the backpack object (toggleId())',
  backpack.toggleLid(),
);

backpack.toggleLid(true);
console.log(backpack.lidOpen);
console.log(`"Left before: "`, backpack.strapLength.left);
console.log(`"Right before: "`, backpack.strapLength.right);

backpack.newStrapLength(10, 15);

console.log(`"Left after: "`, backpack.strapLength.left);
console.log(`"Right after: "`, backpack.strapLength.right);

console.log('The new color is: ', backpack.newColor());
