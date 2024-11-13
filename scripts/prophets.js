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
    prophets.forEach(prophet => {
        let card = document.createElement("section");
		let fullName = document.createElement("h2");
        let portrait = document.creeateElement("img");

		fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getPropethData();