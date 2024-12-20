const spotlight = document.querySelector("#spotlight");
const members = 'data/members.json';

async function getMembersData(members){
    try {
        const response = await fetch(members);
        if(response.ok){
            const data = await response.json();
            displaySpotlight(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlight(members){
    const filteredMembers = members.filter(member => member.membershipPrivileges === 'Gold' || member.membershipPrivileges === 'Silver');
    const mixMembers = filteredMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = mixMembers.slice(0, 3);

    selectedMembers.forEach((member, index) => {
        const card = document.createElement('section');
        const company = document.createElement('h2');
        const tagLine = document.createElement('p');
        const img = document.createElement('img');
        const phone = document.createElement('p');
        const address = document.createElement('p'); 
        const website = document.createElement('a');
        const membershipLevel = document.createElement('p');

        company.textContent = member.name;
        tagLine.textContent = member.offer.toUpperCase();
        tagLine.setAttribute('class', 'tagline')
        img.setAttribute('alt', 'Company Logo');
        img.setAttribute('class', 'logo');
        img.setAttribute('width', 200);
        img.setAttribute('src', member.imageUrl);
        img.setAttribute('height', 200);
        phone.textContent = `Phone: ${member.phoneNumbers}`;
        address.textContent = `Address: ${member.address}`;
        website.href = member.website;
        website.textContent = 'Visit Website';
        website.setAttribute('target', '_blank');
        membershipLevel.textContent = `Membership: ${member.membershipPrivileges}`;

        card.appendChild(company);
        card.appendChild(tagLine);
        card.appendChild(img);
        card.appendChild(phone);
        card.appendChild(address); 
        card.appendChild(website);
        card.appendChild(membershipLevel);

        spotlight.appendChild(card);
    });
}   

getMembersData(members);
