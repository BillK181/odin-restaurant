import odinImage from "./odin.png";

function loadPage(){

    const content = document.querySelector("#content")

    const title = document.createElement("div");
    const heading = document.createElement("h1");

    heading.textContent = "Neon Garden";

    const slogan = document.createElement("div")
    const text = document.createElement("p")
    text.textContent = "Enter Oasis";
    
    const image = document.createElement("img");
    image.src = odinImage;
    image.classList.add("restaurant-image");

    title.appendChild(heading);
    slogan.appendChild(text);

    content.appendChild(title);
    content.appendChild(slogan);
    content.appendChild(image);



}

export default loadPage