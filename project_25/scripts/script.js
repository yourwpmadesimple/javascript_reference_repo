/**
 * Challenge: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackArray from "../components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackArray
  let backpackObject = backpackArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  /**** If the lidOpen state is equal to 'true' ****/
  backpackObject.lidOpen == true
    /**** Then set the lidOpen state to false ****/
    ? (backpackObject.lidOpen = false)
    /**** Otherwise 'ELSE', set the lidOpen to true ****/
    : (backpackObject.lidOpen = true);

  // Toggle button text
  /**** If the innerText is equal to provided string ****/
  button.innerText == "Open Lid"
    /**** Then set the button's InnerText ****/
    ? (button.innerText = "Close Lid")
    /**** Otherwise 'ELSE', Set the button's InnerText ****/
    : (button.innerText = "Open Lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "LID IS CLOSED"
    ? (status.innerText = "LID IS OPEN")
    : (status.innerText = "LID IS CLOSED")

  // Change button background color and 
  let btnBackground = document.querySelector('.lid-toggle');


  status.innerText == "LID IS OPEN"
    ? ((document.querySelector('.lid-toggle').style.backgroundColor = 'black'),
      (document.querySelector('.lid-toggle').style.color = 'white'),
      (document.querySelector('body').style.backgroundColor = 'skyblue'))
    : ((document.querySelector('.lid-toggle').style.backgroundColor = 'white'),
      (document.querySelector('.lid-toggle').style.color = 'black'),
      (document.querySelector('body').style.backgroundColor = 'white'))
};

/**
 * Strap length functionality
 */
const newStrapLength = (strapLength) => {
  console.log(strapLength)
  // Loop through each element on the list
  strapLength.forEach((lengthOfStrap) => {
    // Get what side we are working with
    let side = lengthOfStrap.getAttribute("data-side");

    // Create a new form element
    const lengthForm = document.createElement("form");
    lengthForm.classList.add(
      "w-full",
      "max-w-sm");

    // Populate form with an input and a button
    lengthForm.innerHTML = `
    <div class="flex items-center border-b border-teal-500 py-2">
      <input class="lid-state__value bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" name="${side}Length" placeholder="${side} value">
      <button class="flex-shrink-0 bg-bue-300	hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Update</button>
      </div>
    `;

    // Add event listener to the form submit action
    lengthForm.addEventListener("submit", (e) => {
      // Stop form reloading the page
      e.preventDefault();

      // Get the value from the form input
      let newValue = lengthForm.querySelector(".lid-state__value").value;

      // Set the value of the field
      length.querySelector("span").innerHTML = `${newValue} inches`;

      // Clear the form input
      lengthForm.querySelector(".lid-state__value").value = "";
    });

    // Add form to the end of the length element
    lengthOfStrap.append(lengthForm);
  });
};

const backpackList = backpackArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add('backpack');
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${backpack.volume
    }l</span></li>
      <li class="feature backpack__color">Color:<span> ${backpack.color
    }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pocketNum
    }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${backpack.strapLength.left
    } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${backpack.strapLength.right
    } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${backpack.lidOpen ? "LID IS OPEN" : "LID IS CLOSED"
    }</span></li>
    </ul>
    <button class="lid-toggle">Open Lid</button>
  `;

  // Find the two list items with the .backpack__strap class
  let strapLengths = backpackArticle.querySelectorAll(".backpack__strap");

  // Call the newStrapLength() function and pass on the strapLengths node list.
  newStrapLength(strapLengths);

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "Hello world";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});