import './components/display-joke.js'
import './components/display-greeting.js'

document.getElementById('btn').addEventListener('click', () =>{
    const name = document.getElementById('name')
    if (name.value === '') {
        alert('type your name')
        return
    }
    const exsistingJoke = document.querySelector('display-joke')
    const exsistingGreeting = document.querySelector('display-greeting')
    if (exsistingJoke || exsistingGreeting) {
        exsistingJoke.remove()
        exsistingGreeting.remove()
        
    }
    const newGreeting = document.createElement('display-greeting')
    newGreeting.name = name.value
    document.querySelector('#main').appendChild(newGreeting)
    const newJoke = document.createElement('display-joke')
    document.querySelector('#main').appendChild(newJoke)
    name.value = ''
})