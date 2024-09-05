import './components/display-joke.js'

document.getElementById('btn').addEventListener('click', () =>{
    const exsistingJoke = document.querySelector('display-joke')
    if (exsistingJoke) {
        exsistingJoke.remove()
    }
    const newJoke = document.createElement('display-joke')
    document.querySelector('body').appendChild(newJoke)
})