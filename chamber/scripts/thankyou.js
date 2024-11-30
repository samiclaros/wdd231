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
    <h2>Thank you for your Application!</h2>
    <table>
        <tr>
            <td>Aplication For:</td>
            <td>${show('firstName')} ${show('lastName')}</td>
        </tr>
        <tr>
            <td>Organizational Title:</td>
            <td>${show('orgTitle')}</td>
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
            <td>Company/Organization Name:</td>
            <td>${show('organization')}</td>
        </tr>
        <tr>
            <td>Membership Level:</td>
            <td>${show('membershipLevel')}</td>
        </tr>
        <tr>
            <td>Date & Time:</td>
            <td>${formatTimestamp()}</td>
        </tr>
    </table>`;


