"use strict";

//////////////////////////////////////////////////////////////////
/////////////////////////_GLOBAL_VARIABLES_///////////////////////
//////////////////////////////////////////////////////////////////

var x = 1;

var black = "#24252c";

var plum = "#45355c";

//////////////////////////////////////////////////////////////////
///////////////////////_FUNCTION_DECLARATIONS_////////////////////
//////////////////////////////////////////////////////////////////

function menu() {
    if (x === 1) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    document.getElementById("navigation-container").classList.remove("navbar-container");
    document.getElementById("navigation-container").classList.add("hamburger-container")
    document.getElementById("navigation").classList.remove("navbar");
    document.getElementById("navigation").classList.add("hamburger-menu");
    document.getElementById("hamburger-icon").classList.remove("fa");
    document.getElementById("hamburger-icon").classList.remove("fa-bars");
    document.getElementById("hamburger-icon").classList.add("fas");
    document.getElementById("hamburger-icon").classList.add("fa-times");
    document.getElementById("hamburger-icon").style.backgroundColor = plum;
    document.getElementById("hamburger").style.backgroundColor = plum;
    x = 0;
}

function closeMenu() {
    document.getElementById("navigation-container").classList.add("navbar-container");
    document.getElementById("navigation-container").classList.remove("hamburger-container")
    document.getElementById("navigation").classList.add("navbar");
    document.getElementById("navigation").classList.remove("hamburger-menu");
    document.getElementById("hamburger-icon").classList.add("fa");
    document.getElementById("hamburger-icon").classList.add("fa-bars");
    document.getElementById("hamburger-icon").classList.remove("fas");
    document.getElementById("hamburger-icon").classList.remove("fa-times");
    document.getElementById("hamburger-icon").style.backgroundColor = black;
    document.getElementById("hamburger").style.backgroundColor = black;
    x = 1;
}

function resize() {
    if (window.innerWidth > 800) {
        document.getElementById("navigation").classList.add("navbar");
        document.getElementById("hamburger").style.display = "none";
    }
    if (window.innerWidth <= 800) {
        document.getElementById("hamburger").style.display = "flex";
    }
}

function sendMessage() {

    let para = document.getElementById("submission-para");
    let name = document.getElementById("name-input");
    let email = document.getElementById("email-input");
    let message = document.getElementById("message-input");
    let form = document.getElementById("contact-form");

    if (!name.checkValidity()) {
        para.innerHTML = name.validationMessage;
        event.preventDefault();
    } else if (!email.checkValidity()) {
        para.innerHTML = email.validationMessage;

    } else if (!message.checkValidity()) {
        para.innerHTML = message.validationMessage;
        event.preventDefault();
    } else {
        para.innerHTML = "Your message has been sent successfully!";
        setTimeout(function () {
            alert("Your message has been sent successfully!");
        }, 10);
        setTimeout(function () {
            form.reset();
            para.innerHTML = "";
        }, 11);
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////
/////////////////////////_FUNCTION_CALLING_///////////////////////
//////////////////////////////////////////////////////////////////

var hamburger = document.querySelector("#hamburger");
var navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].onclick = function () {
        if (window.innerWidth < 800) {
            menu();
        }
    }
}


hamburger.onclick = function () {
    menu();
};

window.onresize = resize;

var sendBtn = document.getElementById("send-input");
sendBtn.onclick = function () {
    sendMessage();
}

sendBtn.onsubmit = function () {
    alert("Submitted!");
}