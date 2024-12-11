import { info } from '../data/home.mjs';

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
        img.setAttribute("height", "auto");
        h2.textContent = `TOP DISCOUNTS!`;
        discount.textContent = info.discount;
    
        card.appendChild(img);
        card.appendChild(discount);
        blackFridayContainer.appendChild(card);
    })
  }
  
displayblackFriday();

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
        img.setAttribute("width", "200");
        img.setAttribute("height", "auto");

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

