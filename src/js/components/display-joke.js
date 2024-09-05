

const template = document.createElement
    ('template')
template.innerHTML = `
<style>
    #window {
        border: 1px solid black;
        background-color: orange;
        padding: 5px;
        margin: 5px;
        
    }
</style>
<div id="window">
    <h2 id="setup"></h2>
    <h2 id="delivery"></h2>
    <h2 id="joke"></h2>
</div>`

/** Define the custom element
 * 
 */
customElements.define('display-joke',
    class extends HTMLElement {

        /** The setup for the joke.
         * 
         */
        #setup

        /** The delivery for the joke.
         * 
         */
        #delivery

        /** A single Joke.
         * 
         */
        #joke

        constructor() {
            super()
            // Attach a shadow DOM tree to this element and
            // append the template to the shadow root.
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

                this.#setup = this.shadowRoot.querySelector('#setup')

                this.#delivery = this.shadowRoot.querySelector('#delivery')

                this.#joke = this.shadowRoot.querySelector('#joke')
        }
        /**
         * Called after the element is inserted into the DOM.
        */
        connectedCallback() {
            this.fetchJoke()

        }
        /** Fetches joke
         * 
         */
        async fetchJoke() {
            const respons = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
            const data = await respons.json()
            console.log(data)
            if (data.type === 'twopart') {
                 this.#setup.innerHTML = data.setup
                 this.#delivery.innerHTML = data.delivery
            } else {
                this.#joke.innerHTML = data.joke
            }

        }
    }

)