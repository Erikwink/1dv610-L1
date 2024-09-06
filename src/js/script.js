import './components/display-joke.js'
import './components/display-greeting.js'

document.getElementById('btn').addEventListener('click', () =>{
    const name = document.getElementById('name')
    const hiddenMessage = document.getElementById('hidden')
    // remove old greeting and joke
    const exsistingJoke = document.querySelector('display-joke')
    const exsistingGreeting = document.querySelector('display-greeting')
    if (exsistingJoke || exsistingGreeting) {
        exsistingJoke.remove()
        exsistingGreeting.remove()
        
    }
    // check if input field is empty
    if (name.value === '') {
        hiddenMessage.style.display = 'block'
        return
    }

    hiddenMessage.style.display = 'none'
    // create new joke and greeting
    const newGreeting = document.createElement('display-greeting')
    newGreeting.name = name.value
    document.querySelector('#main').appendChild(newGreeting)
    const newJoke = document.createElement('display-joke')
    document.querySelector('#main').appendChild(newJoke)
    name.value = ''
})