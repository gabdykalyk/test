// SVG ANIMATION
const svg = new Vivus(
    'back',
    {
        type: 'delayed',
        duration: 400,
    },
);

// VALIDATION
function formValidation() {
	let formEmail = document.querySelector('#formEmail')
	let message = document.querySelector('.error-msg')
	let password = document.querySelector('#formPassword')
	let ok = document.querySelector('#ok')
	formEmail.addEventListener('input', () => {
		if (!formEmail.validity.valid) {
			formEmail.classList.add('error')
			ok.style.opacity = '0'
		}

		if (formEmail.validity.valid) {
			formEmail.classList.remove('error')
			ok.style.opacity = '1'
		}
	})

	password.addEventListener('input', () => {
		if (!password.validity.valid) {
			password.classList.add('error')
			message.style.opacity = '1'
		}

		if (password.validity.valid) {
			password.classList.remove('error')
			message.style.opacity = '0'
		}
	})
}

formValidation()

// COMPLETE
function registered() {
	let complete = document.querySelector('#completeBtn')
	let formContainer = document.querySelector('#formContainer')
	let registered = document.querySelector('#registered')
	complete.addEventListener('click', (e) => {
		e.preventDefault()
		formContainer.style.display = 'none'
		registered.style.display = 'block'
	})
}

registered()

function btnError() {
	let complete = document.querySelector('#completeBtn')
	complete.addEventListener('click', (e) => {
		e.preventDefault()
		complete.classList.toggle('btn-error')
	})
}

