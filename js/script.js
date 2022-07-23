
const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login__button')
const audioTema = new Audio('./audio/tema.mp3')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {

    if(target.value === '') {
        const span = target.previousElementSibling
        span.classList.remove('span-active')
    }
}

const handleChange = ({ target }) => { 
    const [username, password] = inputs

    if(username.value && password.value.length >= 8) { 
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut))
inputs.forEach((input) => input.addEventListener('input', handleChange))

// Audio tema
audioTema.play()
audioTema.volume = 0.07
audioTema.loop = true


