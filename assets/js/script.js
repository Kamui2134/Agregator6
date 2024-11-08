"use strict"

const bgImg1 = document.querySelector('.bg-img-1')

window.addEventListener("scroll", () => {
    bgImg1.style.backgroundPositionY = `${window.scrollY * 0.3}px`
})