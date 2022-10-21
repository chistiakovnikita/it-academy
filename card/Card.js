export default class Card extends HTMLElement {
    constructor() {
        super();
        this.data = JSON.parse(this.getAttribute('data'));
    }

    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${this.data.preview}" class="card-img-top" alt="${this.data.title}">
            <div class="card-body">
                <h5 class="card-title">${this.data.title}</h5>
                <p class="card-text">${this.data.description}</p>
                <p><strong>${this.data.price}$</strong></p>
                <button href="#" class="btn btn-primary">Add to cart</button>
            </div>
        </div>
        `;

    }
}