// LAST MODIFIED
const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
	dateStyle: "short",
    timeStyle: "medium"
	}
).format(lastModifiedDate)}</span>`;

// CURRENT YEAR
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()} </span>`;

// BURGUER BUTTON
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// MODULE ES

import { info } from '../data/home.mjs';


// BLACK FRIDAY IMAGES / TOP DISCOUNTS

function displayblackFriday() {
    const blackFridayContainer = document.getElementById('blackFriday');
    blackFridayContainer.innerHTML = '';

    const h2 = document.createElement('h2'); 
    h2.textContent = 'TOP DISCOUNTS!'; 
    blackFridayContainer.appendChild(h2);

    info.forEach(info => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const discount = document.createElement('p');
    
        img.setAttribute('src', info.image);
        img.setAttribute('alt', info.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute("width", "200");
        img.setAttribute("height", "330");
        h2.textContent = `TOP DISCOUNTS!`;
        discount.textContent = info.discount;
    
        card.appendChild(img);
        card.appendChild(discount);
        blackFridayContainer.appendChild(card);
    })
  }
  
displayblackFriday();

// MODELS

function displayModel() {
    const modelContainer = document.getElementById('model');
    modelContainer.innerHTML = '';

    const h2 = document.createElement('h2'); 
    h2.textContent = 'MODELS'; 
    modelContainer.appendChild(h2);

    info.forEach(info => {
        const card = document.createElement('section');
        const img = document.createElement('img');
        const button = document.createElement('button');
    
        img.setAttribute('src', info.model);
        img.setAttribute('alt', info.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute("width", "270");
        img.setAttribute("height", "333");

        button.textContent = "View Details";
        button.addEventListener('click', () => {
            displaySalesDetails(info);
        });
    
        card.appendChild(img);
        card.appendChild(button);
        modelContainer.appendChild(card);
    })
}

displayModel()

// MODAL with Sales Details

const salesDetails = document.querySelector("#salesDetails");

function displaySalesDetails(info) {
    salesDetails.innerHTML = `
      <button id="closeModal">X</button>
      <h2>Name: ${info.name}</h2>
      <h3>Discount: ${info.discount}</h3>
      <p><strong>Price</strong>: ${info.price}</p>
      <p>Description: ${info.description}</p>
    `;

    salesDetails.showModal();
  
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
      salesDetails.close();
    });
}



