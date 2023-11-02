const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */

const filenames = [
	'images/pic1.jpg',
	'images/pic2.jpg',
	'images/pic3.jpg',
	'images/pic4.jpg',
	'images/pic5.jpg',
]

/* Declaring the alternative text for each image file */

const altText = [
	'Closeup of a human eye',
	'Some random thing',
	'Cool flowers violets',
	'egyptians',
	'strashilka',
]

/* Looping through images */

for (let i = 0; i < filenames.length; i++) {
	const newImage = document.createElement('img')
	newImage.setAttribute('src', filenames[i])
	newImage.setAttribute('alt', altText[i])
	thumbBar.appendChild(newImage)
}

thumbBar.addEventListener('click', event => {
	displayedImage.setAttribute('src', event.target.getAttribute('src'))
})

/* Wiring up the Darken/Lighten button */
function darkAndLight() {
	if (btn.getAttribute('class') === 'dark') {
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
		btn.setAttribute('class', 'light')
		btn.textContent = 'Lighten'
	} else {
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
		btn.setAttribute('class', 'dark')
		btn.textContent = 'Darker'
	}
}

btn.addEventListener('click', darkAndLight)
