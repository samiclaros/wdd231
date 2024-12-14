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

// Local Storage

const currentURL = window.location.href;
const everything = currentURL.split('?');
let formData = everything[1].split('&');

function show(cup){
    let result = '';
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
        }
    });
    return (result);
};

function formatTimestamp(timestamp) {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
    }).format(date);
}

const showInfo = document.querySelector("#results");

showInfo.innerHTML = `
    <h2>Thank you for your Subscription. We appreciate your visit and we will contact you soon!</h2>
    <table>
        <tr>
            <td>Subscription For:</td>
            <td>${show('firstName')} ${show('lastName')}</td>
        </tr>
        <tr>
            <td>Email Address:</td>
            <td>${show('email')}</td>
        </tr>
        <tr>
            <td>Mobile Phone Number:</td>
            <td>${show('phone')}</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>${show('description')}</td>
        </tr>
        <tr>
            <td>Date & Time:</td>
            <td>${formatTimestamp()}</td>
        </tr>
    </table>`;

// Datetimenow
const currentDateLocalStorage = new Date();
const msToDays = 86400000;


const lastVisit = localStorage.getItem("lastVisit");
const visitMessageElement = document.querySelector("#visits");

if(!lastVisit) {
  visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
} else{
  const lastVisitDate = new Date(lastVisit);
  const daysSinceLastVisit = Math.round((currentDateLocalStorage - lastVisitDate) / msToDays);
  
  if(daysSinceLastVisit < 1) {
    visitMessageElement.textContent = "Back so soon! Awesome!";
  } else{
    visitMessageElement.textContent = `You last visited was ${daysSinceLastVisit} days ago.`;
  }
}

localStorage.setItem('lastVisit', currentDateLocalStorage.toISOString());


