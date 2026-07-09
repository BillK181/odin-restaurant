import menu from "./menu.png"

function loadMenu(){

    const content = document.querySelector("#content")

    const title = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Neon Garden";

    const slogan = document.createElement("div")
    const text = document.createElement("p")
    text.textContent = "Menu";
    
    const image = document.createElement("img");
    image.src = menu;
    image.classList.add("restaurant-image");

    title.appendChild(heading);
    slogan.appendChild(text);

    content.appendChild(title);
    content.appendChild(slogan);
    content.appendChild(image);



}

export default loadMenu