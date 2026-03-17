// MENU TOGGLE

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};

// ACTIVE NAVBAR LINKS

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

sections.forEach(sec => {

let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if (top >= offset && top < offset + height) {

navLinks.forEach(link => {
link.classList.remove('active');
document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});

}

});

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


// TYPING ANIMATION

const roles = [
"Software Engineer",
"Full Stack Developer",
"Machine Learning Enthusiast",
"Data Science Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const textSpan = document.querySelector(".text-animation span");

function typeEffect() {

if (charIndex < roles[roleIndex].length) {

textSpan.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect, 80);

}

else {

setTimeout(deleteEffect, 1500);

}

}

function deleteEffect() {

if (charIndex > 0) {

textSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);

charIndex--;

setTimeout(deleteEffect, 40);

}

else {

roleIndex++;

if (roleIndex >= roles.length) roleIndex = 0;

setTimeout(typeEffect, 300);

}

}

document.addEventListener("DOMContentLoaded", () => {

typeEffect();

});


// THEME TOGGLE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");
document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("light-mode")) {

themeToggle.textContent = "☀️";

}

else {

themeToggle.textContent = "🌙";

}

});