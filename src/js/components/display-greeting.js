const template = document.createElement
    ('template')
template.innerHTML = `
<style>
    #window {
        background-color: #95d5b2;
        padding: 10px;
        margin: 10px 10px 0px 10px;
        border-radius: 10px 10px 0 0 ;
    }
</style>
<div id="window">
    <h1>Hello  <span id="name"></span></h1>
    <h2>Here is a joke to enlighten your day:</h2>
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