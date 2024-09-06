

const template = document.createElement
    ('template')
template.innerHTML = `
<style>
    #window {
        border-top: 1px solid #2d6a4f;
        background-color: #95d5b2;
        padding: 10px;
        margin: 0px 10px 20px 10px;
        border-radius: 0 0 10px 10px;
        
    }
</style>
<div id="window">
    <h2 id="setup">Waiting for joke</h2>
    <h2 id="delivery"></h2>
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

        constructor() {
            super()
            // Attach a shadow DOM tree to this element and
            // append the template to the shadow root.
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))

                this.#setup = this.shadowRoot.querySelector('#setup')

                this.#delivery = this.shadowRoot.querySelector('#delivery')

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
            try {
            const respons = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
            const data = await respons.json()
            console.log(data)
            if (data.error) {
                this.#setup.innerHTML = 'Something went wrong, please try again'
                throw new Error('something went wrong')
                
            } else if (data.type === 'twopart') {
                 this.#setup.innerHTML = data.setup
                 this.#delivery.innerHTML = data.delivery
            } else {
                this.#setup.innerHTML = data.joke
            }
        } catch (error) {
            throw new Error('something went wrong')
        }

        }
    }

)