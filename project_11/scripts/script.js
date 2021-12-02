/**
 * Arrow functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const greenPack = {
    name: 'Frog Pack',
    color: 'green',
    volume: 8,
    pocketNum: 3
}

const addPack = (currentPack) => {
    const newArticle = document.querySelector('article');
    newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
    <li>Volume: ${currentPack.volume} </li>
    <li>Color: ${currentPack.Color} </li>
    <li>Number of pockets: ${currentPack.pockNum} </li>
    </ul>
    `;
    return newArticle
}
const theArticle = addPack(greenPack);
console.log(theArticle)


const main = document.querySelector('main');
main.append(theArticle);