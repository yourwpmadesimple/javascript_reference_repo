/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
// import Backpack from "./components/Backpack.js";
import backpackObjectArray from "../components/data.js";

// Map through array and make new array
const content = backpackObjectArray.map(backpack => {

  // Create new article
  let backPackArticle = document.createElement('article');
  backPackArticle.classList.add('backpack')

  // Set ID to the the backpack.id property
  backPackArticle.setAttribute('id', backpack.id)

  backPackArticle.innerHTML =
    `<figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${backpack.volume
    }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${backpack.color
    }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${backpack.pocketNum
    }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${backpack.strapLength.left
    } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${backpack.strapLength.right
    } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span> ${backpack.lidOpen === false ? "Closed" : "Open"}</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>`

  // Change status of backpack (open or closed)

  const button = backPackArticle.querySelector('.lid-toggle')
  const status = backPackArticle.querySelector('.backpack__lid span')
  button.addEventListener('click', (e) => {
    console.log(status.innerText === 'Closed')
    status.innerText === "Closed" ? status.innerText = "Open" : status.innerText = "Closed"
  })

  // Return backPackArticle to the content
  return backPackArticle;
})

// Get main
const main = document.querySelector('.maincontent')

// Loop through the content array to append each backpack article
content.forEach(backpack => {
  main.append(backpack)
})