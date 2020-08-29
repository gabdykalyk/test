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
	let formContainer = document.querySelector('#formContainer')
	let banner = document.querySelector('#banner')
		banner.style.display = 'none'
		formContainer.innerHTML = `<div id="registered" class="registered">
			<div class="registered__info">
				<div class="registered__title">
					Thank You!
				</div>
				<div class="registered__text">
					you registered!
				</div>
			</div>
			<div class="registered__footer">
				<div class="form__login">
					Have an account? <a class="footer__link" href="">Login</a>
				</div>
			</div>
		</div>`
}

function btnError() {
	let complete = document.querySelector('#completeBtn')
		complete.classList.add('btn-error')

		function removeError() {
			complete.classList.remove('btn-error')
		}
		setTimeout(removeError, 1000);
}

//JSON OK
function okJson() {
	var requestURL = '../JSON/server-ok.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		var answer = request.response;
		console.log(answer.message)
		if (answer.answer === 'ok') {
			registered()
		}
	}
}

//JSON ERROR
function errorJson() {
	var requestURL = '../JSON/server-error.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		var answer = request.response;
		console.log(answer.message)
		if (answer.answer === 'error') {
			btnError()
		}
	}
}

//SEND
let complete = document.querySelector('#completeBtn')
let formEmail = document.querySelector('#formEmail')
let password = document.querySelector('#formPassword')
complete.addEventListener('click', () => {
	if (formEmail.validity.valid && password.validity.valid) {
		okJson()
	}
	if (!formEmail.validity.valid || !password.validity.valid) {
		errorJson()
	}
})
