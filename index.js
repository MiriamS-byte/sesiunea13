const myDiv = document.getElementById("myDiv");
console.log(myDiv);

myDiv.style.color = "red";
myDiv.innerText = "Changed text";
// myDiv.innerHTML = "<ul><li>Hello</li><li>Goodbye</li></ul>";

const hello = "Hello";
const goodbye = "Goodbye";
myDiv.innerHTML = `
<ul>
    <li>${hello}</li>
    <li>${goodbye}</li>
</ul>`;

//acces elem dupa nume de clasa
const allErrors = document.getElementsByClassName("error");
console.log(allErrors);

//acces elem dupa nume
const allAnimalInputs = document.getElementsByName("animal");
console.log(allAnimalInputs);

//acces elem dupa numele tag-ului
const allSections = document.getElementsByTagName("section");
console.log(allSections);

//acces elem dupa orice selector CSS (query-uri)
//acces primul elem
const firstSection = document.querySelector("section");
console.log(firstSection);
const firstError = document.querySelector(".error");
console.log(firstError);

//acces toate elem
const allSectionsByQuery = document.querySelectorAll("section");
console.log(allSectionsByQuery);
const myDivByQuery = document.querySelectorAll("#myDiv");
console.log(myDivByQuery);
const allErrorsByQuery = document.querySelectorAll(".error");
console.log(allErrorsByQuery);

//manipularea atributelor unui link (get si set attribute)
const importantLink = document.querySelector("section > a");
console.log(importantLink);
importantLink.setAttribute("href", "https://dexonline.ro/intrare/important/26804");
const href = importantLink.getAttribute("href");
console.log("href: ", href);

//manipulare claselor de css ale elem
importantLink.classList.add("important");
importantLink.classList.add("critical");

const lastError = document.querySelector("section > p:last-child");
console.log(lastError);
lastError.classList.remove("important");

//crearea unui elem HTML si adaugarea lui in DOM
const parent = document.getElementById("created-elem");
const subtitle = document.createElement("h3");
console.log(parent);
parent.appendChild(subtitle);
subtitle.textContent = "This subtitle was added with js";

//stergere elem HTML din DOM
const toDelete = document.querySelector("#delete-me");
toDelete.remove();

//adaugarea de ascultatori de evenimente(functii ce se apeleaza cand apare un eveniment
const btn1 = document.querySelector("#click-me");
let clickLimit = 3;
let currentClickCount = 0;
const onClick = () => {
    alert("Button was clicked");
    currentClickCount ++;
    if(currentClickCount === clickLimit) {
        btn1.removeEventListener("click", onClick);
    }
}
btn1.addEventListener("click", onClick);

//localStorage si sessionStorage
//stocare de date in browser, si dupa ce inchidem si deschidem browserul

// localStorage.setItem("importantData", "3 items in cart"); //s-a executat, s-au salvat, pot sa comentez linia
const savedData = localStorage.getItem("importantData");
console.log("savedData ", savedData);

//stocare de date in browser, care se sterg dupa inchiderea aplicatiei
sessionStorage.setItem("temporary", "Temporary data");
const tempData = sessionStorage.getItem("temporary");
console.log(tempData);
