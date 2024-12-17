const body = document.querySelector("body");
const paragraph = document.createElement("p");

paragraph.id = "paragraph";
paragraph.textContent = "";

const button = document.createElement("button");
button.id = "add-text-btn";
button.textContent = "ceci est un button";

const button1 = document.createElement("button");
button1.id = "add-text-btn";
button1.textContent = "ceci est un button2";

body.appendChild(button);
body.appendChild(paragraph);
body.appendChild(button1);

function test(event) {
    paragraph.textContent = "Hello, world!";
    console.log(`Vous avez cliqué sur le bouton ${event.target.id}`);
}
function test1(event) {
    const listli = document.createElement("li");
    listli.innerText = "Nouvel élément";
    listul.appendChild(listli);
    console.log(`Vous avez cliqué sur le bouton ${event.target.id}`);
}

button.addEventListener("click", test);
button1.addEventListener("click", () => {
    paragraph.style.backgroundColor = "red";
});
const button3 = document.createElement("button");
button3.id = "add-text";
button3.textContent = "ceci est un button3";
body.appendChild(button3);

const listul = document.createElement("ul");
body.appendChild(listul);

button3.addEventListener("click", test1);

// function gestionnaireClic(event) {
//     console.log(`Vous avez cliqué sur le bouton ${event.target.id}`);
//   }
