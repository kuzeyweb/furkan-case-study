'use strict'

const carousel = document.querySelector(".carousel");
const itemCount = document.querySelector('.product-cards').childElementCount;
const productCards = document.querySelector('.product-cards');
const next = document.querySelector('.icon-chevron-right');
const prev = document.querySelector('.icon-chevron-left');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');


var mob_view = window.matchMedia("(max-width: 768px)")

let progress = 0;

function isElementInViewport() {
    var bounding = document.querySelector("div.carousel-container > div > div:last-child").getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        return true
    } else {
        return false
    }
}
function isElementInViewportMobile() {
    var bounding = document.querySelector("div.carousel-container > div > div:nth-last-child(2)").getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        return true
    } else {
        return false
    }
}

next.addEventListener('click', e => {
    if (progress < itemCount - 1) {
        progress++
        carousel.style.setProperty("--slider-index", progress);
    }
    if (progress > 0) {
        prevButton.classList.remove("hidden");
    }
    if (progress == 1) {
        carousel.style.setProperty("--slide", '-17.5%');
    }
    if (progress == 1) {
        carousel.style.setProperty("--slide", '-16.5%');
    }
    if(mob_view.matches === true && isElementInViewportMobile() === true){
            nextButton.classList.add("hidden");
    }else if(mob_view.matches === false && isElementInViewport() === true){
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
