'use strict'

// const bgImg1 = document.querySelector('.bg-img-1')

// window.addEventListener('scroll', () => {
// 	bgImg1.style.backgroundPositionY = `${window.scrollY * 0.6}px`
// })

const nav = document.querySelector('.header__nav')
const navToggler = document.querySelector('.header__toggle-btn')
const navLinks = document.querySelectorAll('.header__nav-link')

navToggler.addEventListener('click', function () {
	this.classList.toggle('active')
	nav.classList.toggle('active')
})
navLinks.forEach(element => {
	element.addEventListener('click', function () {
		nav.classList.remove('active')
		navToggler.classList.remove('active')
	})
})
