const url = 'data/members.json';
const display = document.querySelector("#cards");

async function getMembersData(url) {
    const response = await fetch(url);  
    const data = await response.json(); 
    displayMembers(data.members); 
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
        portrait.setAttribute("width", "150");
        portrait.setAttribute("height", "150");
        adress.textContent = member.address;
        phoneNumbers.textContent = member.phoneNumbers;
        website.setAttribute("href", member.website);
        website.textContent = "Website";


        card.appendChild(companyName);
        card.appendChild(portrait);
        card.appendChild(adress);
        card.appendChild(phoneNumbers);
        card.appendChild(website);
        
        display.appendChild(card);
    });
}

getMembersData(url);

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
