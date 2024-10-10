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