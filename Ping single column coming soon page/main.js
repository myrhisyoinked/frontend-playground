const input = document.querySelector('input')
const button = document.querySelector('button')
const para = document.querySelector('.invalid-email-para')

function validateEmail(input, event) {
	var validRegex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!input.value.match(validRegex)) {
		event.preventDefault()
		input.classList.add('red-border')
		input.classList.add('no-bottom-margin')
		para.classList.remove('hidden')
		input.focus()
	}
}

button.addEventListener('click', event => {
	validateEmail(input, event)
})
