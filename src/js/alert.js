// SVG ANIMATION
const svg = new Vivus(
    'back',
    {
        type: 'delayed',
        duration: 400,
    },
);

// VALIDATION
let formEmail = document.querySelector('#formEmail')
let message = document.querySelector('.error-msg')
let password = document.querySelector('#formPassword')
formEmail.addEventListener('input', () => {
    if (!formEmail.validity.valid) {
        formEmail.classList.add('error')
    }

    if (formEmail.validity.valid) {
        formEmail.classList.remove('error')
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
