let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
let ul = document.getElementById("colors")
let li = document.createElement("li");
let clearColors = document.querySelector(".clear");
let p = document.createElement("p");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", function myFunction() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(`linear-gradient(to right, ${color1.value}, ${color2.value})`);
    let div = document.createElement("div");
    let divText = document.createTextNode("Hey")
    node.appendChild(textnode);
    node.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    document.getElementById("colors").appendChild(node);
});

clearColors.addEventListener("click", function () {
    ul.innerHTML = ''
})