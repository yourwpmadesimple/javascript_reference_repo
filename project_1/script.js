import Backpack from './Backpack.js';
// name, volume, color, pocketNum, strapLength, lidOpen
const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'blue',
  15,
  26,
  26,
  'Open',
  'Mon Nov 30 2020 06:15:14 GMT-0700 (Mountain Standard Time)',
);

const content = `
<main>
    <article>
    <h2>${everydayPack.name}</h2>
        <ul>
            <li>Backpack Volume: ${everydayPack.volume}</li>
            <li>Backpack Color: ${everydayPack.color}</li>
            <li>Backpack Age: ${everydayPack.backpackAge()} old</li>
            <li>Number of pockets: ${everydayPack.pocketNum}</li>
            <li>Strap length left: ${everydayPack.strapLength.left}</li>
            <li>Strap length right: ${everydayPack.strapLength.right}</li>
            <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
    </article>
</main>
`;
document.getElementById('root').innerHTML = content;

console.log('The everydayPack Object: ', everydayPack);
console.log('The color value: ', everydayPack.color);
console.log('Date aquired: ', everydayPack.dateAquired.toDateString());
