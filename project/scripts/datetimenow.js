// Datetimenow
const currentDateLocalStorage = new Date();
const msToDays = 86400000;


const lastVisit = localStorage.getItem("lastVisit");
const visitMessageElement = document.querySelector("#visits");

if(!lastVisit) {
  visitMessageElement.textContent = "Welcome! Are you already part of the family of ESSENTIAL? 😉";
} else{
  const lastVisitDate = new Date(lastVisit);
  const daysSinceLastVisit = Math.round((currentDateLocalStorage - lastVisitDate) / msToDays);
  
  if(daysSinceLastVisit < 1) {
    visitMessageElement.textContent = "You are back so soon! That means you want to be an ESSENTIAL member! 🥳";
  } else{
    visitMessageElement.textContent = `You last visited was ${daysSinceLastVisit} days ago. Are you ready to be an ESSENTIAL member? 😎`;
  }
}

localStorage.setItem('lastVisit', currentDateLocalStorage.toISOString());