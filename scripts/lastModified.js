const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
	dateStyle: "short",
    timeStyle: "medium"
	}
).format(lastModifiedDate)}</span>`;