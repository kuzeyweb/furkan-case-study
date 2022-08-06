'use strict'

const carousel = document.querySelector(".carousel");
const itemCount = document.querySelector('.product-cards').childElementCount;
const productCards = document.querySelector('.product-cards');
const next = document.querySelector('.icon-chevron-right');
const prev = document.querySelector('.icon-chevron-left');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

let mob_view = window.matchMedia("(max-width: 768px)");

let progress = 0;

next.addEventListener('click', e => {
    if (progress < itemCount - 1) {
        progress++
        carousel.style.setProperty("--slider-index", progress);
    }
    if (progress > 0) {
        prevButton.classList.remove("hidden");
    }
    if (progress == itemCount - 1) {
        nextButton.classList.add("hidden");
    }

})
prev.addEventListener('click', e => {
    if (progress > 0) {
        progress--
        carousel.style.setProperty("--slider-index", progress);
    } if (progress == 0) {
        prevButton.classList.add("hidden");
    }
    if (progress < itemCount - 1) {
        nextButton.classList.remove("hidden");
    }
})

const heart = document.querySelector('.product-fav');

heart.addEventListener('click' , e => {

    heart.style.color = '#E22828';
})
