const spotlight = document.querySelector("#spotlight");
const url = 'data/members.json';

async function getMembersData(url){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
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
        const adress = document.createElement('p');
        const website = document.createElement('a');
        const membershipLevel = document.createElement('p');

        company.textContent = member.name;
        tagLine.textContent = member.offer.toUpperCase();
        img.setAttribute('alt', 'Company Logo');
        img.setAttribute('class', 'logo');
        img.setAttribute('width', 100);
        img.setAttribute('src', member.imageUrl);
        img.setAttribute('height', 100);
        phone.textContent = `Phone: ${member.phoneNumbers}`;
        adress.textContent = `Adress: ${member.address}`;
        website.href = member.website;
        website.textContent = 'Visit Website';
        website.setAttribute('target', '_blank');
        membershipLevel.textContent = `Membership: ${member.membershipPrivileges}`;

        card.appendChild(company);
        card.appendChild(tagLine);
        card.appendChild(img);
        card.appendChild(phone);
        card.appendChild(adress);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        spotlight.appendChild(card);
    });
}   

getMembersData();