export default class SearchList extends HTMLElement {
    constructor() {
        super();
        this.data = JSON.parse(this.getAttribute('data'))
    }

    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML =`
            <ul>
               ${this.data
                .map((item) => ` <li>${item}</li>`)
                .join('')
            
            
            }
            </ul>
        `   
    }
}








customElements.define('search-list', SearchList)