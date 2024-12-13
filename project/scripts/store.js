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

// Buttons CARDS

const url = './data/products.json';
const clothesContainer = document.querySelector("#clothesContainer");
const buttons = document.querySelectorAll(".menu button");

async function getProductsData(url) {
	try{
		const response = await fetch(url);
		if(response.ok){
			const data = await response.json();
			console.log(data);
			return data;
		} else{
			throw Error(await response.text());
		}
	} catch (error) {
        console.error(error)
    }
}

(async () => {
    const productsData = await getProductsData(url);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.id;
            displayContent(category, productsData);
        });
    });
	buttons[0].click();
})();

function displayContent(category, productsData){
	const products = productsData[category]; 
	clothesContainer.innerHTML = '';
	products.forEach((product, index) => { 
		let card = document.createElement("section"); 
		let productName = document.createElement("h2"); 
		let image = document.createElement("img"); 
		let price = document.createElement("p"); 
		let colors = document.createElement("p");

		productName.textContent = product.title; 
		image.setAttribute("src", product.image); 
		image.setAttribute("alt", `Image of ${product.title}`); 

		image.setAttribute("width", "400"); 
		image.setAttribute("height", "500"); 

		if (index !== 0) {
			image.setAttribute("loading", "lazy");
		}

		price.textContent = `Price: $${product.price}`; 
		colors.textContent = `Available Colors: ${product.colors.join(', ')}`; 

		image.addEventListener("click", () => {
			displayModal(product);
		});

		card.appendChild(productName); 
		card.appendChild(image); 
		card.appendChild(price); 
		card.appendChild(colors); 

		clothesContainer.appendChild(card); 
	}); 
} 

// MODAL

// MODAL with Sales Details

const clothesModal = document.querySelector("#clothesModal");

function displayModal(data) {
	clothesModal.innerHTML = `
	  <button id="closeModal">X</button>
	  <h2>${data.title}</h2>
	  <p>➣ ${data.description}</p>
	  <p>➣ ${data.warranty}</p>
	`;

	clothesModal.showModal();
  
	const closeModal = document.querySelector("#closeModal");
	closeModal.addEventListener("click", () => {
	  clothesModal.close();
	});
}