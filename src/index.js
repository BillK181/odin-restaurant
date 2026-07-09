// src/index.js

// Imports
import "./styles.css";
import { greeting } from "./greeting.js";
import loadPage from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


// JavaScript code
console.log(greeting);
const content = document.querySelector("#content");
loadPage();

const homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadPage();
});

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

const contactButton = document.querySelector("#contact-button");

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});