// FORM

const currentURL = window.location.href;

const everything = currentURL.split('?');

let formData = everything[1].split('&');

function show(cup){
    let result = ''
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("+"," ").replace("%40","@").replace("%2B","+");
        }
    });
    return (result);
};

const showInfo = document.querySelector("#results");
    showInfo.innerHTML = `
        <h2>Thank you for your Application!</h2>
        <table>
            <tr>
                <td>Aplication For:</td>
                <td>${show('firstName')} ${show('lastName')}</td>
            </tr>
            <tr>
                <td>Organizational Title</td>
                <td>${show('orgTitle')}</td>
            </tr>
            <tr>
                <td>Email Address</td>
                <td>${show('email')}</td>
            </tr>
            <tr>
                <td>Mobile Phone Number</td>
                <td>${show('phone')}</td>
            </tr>
            <tr>
                <td>Company/Organization Name</td>
                <td>${show('organization')}</td>
            </tr>
            <tr>
                <td>Membership Level</td>
                <td>${show('membershipLevel')}</td>
            </tr>
        </table>
    `;

    // <tr>
    //     <td>Date & Time:</td>
    //     <td>${formatTimestamp(show('timestamp'))}</td>
    // </tr>
