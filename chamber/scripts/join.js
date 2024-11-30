const memberships = [
    {
        title: "Non-Profit Membership",
        description: "This membership is designed for non-profit organizations looking to benefit from our resources and network without any cost.",
        price: "Free",
        benefits: [
            "Access to all events",
            "Networking opportunities",
            "Free promotional materials"
        ]
    },
    {
        title: "Bronze Membership",
        description: "The Bronze Membership offers essential benefits for small businesses and startups looking to grow and expand their network.",
        price: "$100/year",
        benefits: [
            "Access to all events",
            "Networking opportunities",
            "Discounted promotional materials",
            "Basic business support"
        ]
    },
    {
        title: "Silver Membership",
        description: "The Silver Membership provides additional benefits for growing businesses, including more extensive support and promotional opportunities.",
        price: "$200/year",
        benefits: [
            "Access to all events",
            "Networking opportunities",
            "Free promotional materials",
            "Advanced business support",
            "Priority customer service"
        ]
    },
    {
        title: "Gold Membership",
        description: "The Gold Membership offers the most comprehensive benefits, including exclusive access to premium events and personalized business support.",
        price: "$300/year",
        benefits: [
            "Access to all events",
            "Networking opportunities",
            "Free promotional materials",
            "Premium business support",
            "Exclusive access to premium events",
            "Personalized business consultations"
        ]
    }
];

const membershipDialog = document.querySelector("#membershipInfo");
const buttons = document.querySelectorAll(".membershipCards button"); 

buttons.forEach((button, index) => { 
    button.addEventListener("click", () => { 
        showMembershipInfo(index); 
    }); 
});

function showMembershipInfo(index) { 
    const membership = memberships[index]; 

    membershipDialog.innerHTML = ` 
    <h2>${membership.title}</h2> 
    <p>${membership.description}</p> 
    <ul> ${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')} </ul> 
    <p><strong>Price:</strong> ${membership.price}</p> `;
    
    const closeModal = document.createElement('button');
    closeModal.setAttribute('id', 'closeModal');
    closeModal.innerHTML = "X";
    membershipDialog.appendChild(closeModal);

    membershipDialog.showModal();

    closeModal.addEventListener("click", () => { 
        membershipDialog.close();    
    });
}
