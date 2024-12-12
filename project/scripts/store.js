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