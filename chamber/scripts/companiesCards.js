const url = '../data/members.json';
const display = document.querySelector("#cards");

async function getMembersData(url) {
    try { 
        const response = await fetch(url); 
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        } 
        const data = await response.json(); 
        displayMembers(data.members); 
    } catch (error) { 
        console.error('Error al obtener los datos:', error);
}

const displayMembers = (members) => {
    // card build code goes here
    display.innerHTML = '';
    members.forEach(member => {
        let card = document.createElement("section");
		let companyName = document.createElement("h2");
        let portrait = document.createElement("img");
        let adress = document.createElement("p");
        let phoneNumbers = document.createElement("p");
        let website = document.createElement("a");
        
        
		companyName.textContent = `${member.name}`;
        portrait.setAttribute("src", member.imageUrl);
        portrait.setAttribute("alt", `Ilustration of ${member.name}.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        adress.textContent = `${member.adress}`;
        phoneNumbers.textContent = `${member.phoneNumbers}`;
        website.setAttribute("href", `${member.website}`)
        website.textContent = "Website";


        card.appendChild(companyName);
        card.appendChild(portrait);
        card.appendChild(adress);
        card.appendChild(phoneNumbers);
        card.appendChild(website);
        
        cards.appendChild(card);
    });
}

getMembersData(url);

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}