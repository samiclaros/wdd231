const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getPropethData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // card build code goes here
    cards.innerHTML = '';
    prophets.forEach(prophet => {
        let card = document.createElement("section");
		let fullName = document.createElement("h2");
        let birth = document.createElement("p");
        let place = document.createElement("p");
        let portrait = document.createElement("img");
        
		fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of birth: ${prophet.birthplace}`;


        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

getPropethData(url);

const allProphets = document.querySelector("#allProphets");
const utah = document.querySelector("#utah");
const outsideUSA = document.querySelector("#outsideUSA");
const moreNinetyFiveYears = document.querySelector("#moreNinetyFiveYears");
const moreThanTenChildren = document.querySelector("#moreThanTenChildren");
const moreThanFifteenYears = document.querySelector("#moreThanFifteenYears");

allProphets.addEventListener("click", async () => {
	const response = await fetch(url)
    const data = await response.json();
    displayProphets(data.prophets);
});

utah.addEventListener("click", async () => {
    const response = await fetch(url);
    const data = await response.json();
    const utahProphets = data.prophets.filter(prophet => prophet.birthplace === "Utah");
    displayProphets(utahProphets);
});

outsideUSA.addEventListener("click", async () => {
	const response = await fetch(url);
    const data = await response.json();
    const outsideUSAProphets = data.prophets.filter(prophet => prophet.birthplace === "England");
    displayProphets(outsideUSAProphets);
});

moreNinetyFiveYears.addEventListener("click", async () => { 
    const response = await fetch(url); 
    const data = await response.json(); 
    const oldProphets = data.prophets.filter(prophet => { 
        const birthYear = new Date(prophet.birthdate).getFullYear(); 
        const currentYear = new Date().getFullYear(); 
        return (currentYear - birthYear) > 95; }); 
        displayProphets(oldProphets);
});

moreThanTenChildren.addEventListener("click", async () => { 
    const response = await fetch(url); 
    const data = await response.json(); 
    const manyChildrenProphets = data.prophets.filter(prophet => prophet.numofchildren >= 10); 
    displayProphets(manyChildrenProphets); 
}); 

moreThanFifteenYears.addEventListener("click", async () => { 
    const response = await fetch(url); 
    const data = await response.json(); 
    const longTermProphets = data.prophets.filter(prophet => prophet.length >= 15); 
    displayProphets(longTermProphets);
});
