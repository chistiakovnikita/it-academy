class Search extends HTMLElement {

    constructor() {
        super();
        this.content = this.getAttribute('content')
    }

    connectedCallback() {
        this.innerHTML = `
            <div>
                <a href='#'>${this.content}</a>
            </div>
        `
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
    }

    static get observedAttributes() {
        return ['content']
    }
}


customElements.define('user-search', Search)