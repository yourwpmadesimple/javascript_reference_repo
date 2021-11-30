/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from './Backpack.js';

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false,
  'December 5, 2018 15:00:00 PST',
  '../../project_4/assests/images/everyday.svg',
);

const content = `
   
     <figure class="backpack__image">
       <img src=${everydayPack.image} alt="" />
     </figure>
     <h1 class="backpack__name">${everydayPack.name}</h1>
     <ul class="backpack__features">
       <li class="packprop backpack__volume">Volume:<span> ${
         everydayPack.volume
       }l</span></li>
       <li class="packprop backpack__color">Color:<span> ${
         everydayPack.color
       }</span></li>
       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
       <li class="packprop backpack__pockets">Number of pockets:<span> ${
         everydayPack.pocketNum
       }</span></li>
       <li class="packprop backpack__strap">Left strap length:<span> ${
         everydayPack.strapLength.left
       } inches</span></li>
       <li class="packprop backpack__strap">Right strap length:<span> ${
         everydayPack.strapLength.right
       } inches</span></li>
       <li class="packprop backpack__lid">Lid status:<span> ${
         everydayPack.lidOpen
       }</span></li>
     </ul>
 `;

const main = document.querySelector('.maincontent');

const newArticle = document.createElement('article');
newArticle.classList.add('backpack');
newArticle.setAttribute('id', 'everyday');
newArticle.innerHTML = content;
main.append(newArticle);

// Create navigation
const navContent = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Backpacks</a></li>
  <li><a href="#">Other things</a></li>
  <li><a href="#">Contact</a></li>
`;

// Create 'nav' element on mainNav variable
const mainNav = document.createElement('nav');
console.log(`Create 'nav' element on mainNav variable`);

// Insert '.main-navigation' class to 'nav' element via mainNav
mainNav.classList.add('main-navigation');
console.log(
  `Insert '.main-navigation' class to 'nav' element via 'var = mainNav'`,
);

// Create 'ul' element on 'var = navList'
const navList = document.createElement('ul');
console.log(`Create 'ul' element on 'var = navList'`);

// Insert 'var = navContent' content inside the 'var = navList' ul
navList.innerHTML = navContent;
console.log(`Insert 'var = navContent' content inside the 'var = navList' ul`);

// Append the 'ul' 'var = navList' content before the closing tag of '.main-navigation  </nav>'
mainNav.append(navList);
console.log(
  `Append the 'ul' 'var = navList' content before the closing tag of '.main-navigation  </nav>'`,
);

// Append the 'var = mainNav / .main-navigation' content before the closing '.siteheader' </header>
document.querySelector('.siteheader').append(mainNav);
console.log(
  `Append the 'var = mainNav / .main-navigation' content before the closing '.siteheader' </header>`,
);
