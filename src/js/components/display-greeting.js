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
    <h1>Hello  <span id="name"></span></h1>
    <h2>here is a joke to enlighten your day</h2>
</div>`

/** Define the custom element
 * 
 */
customElements.define('display-greeting',
    class extends HTMLElement {
    
        constructor() {
            super()
            // Attach a shadow DOM tree to this element and
            // append the template to the shadow root.
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
                
        }

        /** Set the name of the greeting.
         * 
         * @param {string} value - The name of the user.
         */
        set name(value){
            this.shadowRoot.querySelector('#name').textContent = value
        }

    })