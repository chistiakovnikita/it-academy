export default class Cart extends HTMLElement{
    constructor() {
        super()
        this.quantity = 0;
        this.isVisible = false;   //  ? false
        this.data = [];
        
    }


    onToggleTable(evt){
        if(evt.target.closest('.cart-link-icon')) {
            evt.preventDefault();
        this.isVisible = !this.isVisible;
        this.render();
       }
         
    }


    onDeleteItem(evt){
        if(evt.target.closest('.btn')) {
            const productId = Number(evt.target.dataset.productId);  // dataset.productId  из  data-product-id
            this.data = this.data.filter((item) => item.id !== productId)
            this.quantity = this.quantity - 1;
            this.render()
        }
    }



    
    onClick(evt) {
       this.onToggleTable(evt)
       this.onDeleteItem(evt)
    }




    watchOnData() {
        window.addEventListener('share-data', (evt) => {    //  ? window
            this.data = [...this.data, evt.detail];    // this.data.push(evt.detail)
            this.quantity = this.quantity + 1;
            this.render()
        })
    }


   

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.onClick);  // ? this.onClick а не  onClick
        this.watchOnData();
    }


    disconnectedCallback() {
        this.render();
        this.removeEventListener('click', this.onClick) 
    }

    


    render() {
        this.innerHTML = `
        <a href='#' class="position-relative cart-link-icon">
            <img src='./img/cart.svg' width='50' height='50' class='cart-icon'/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               ${this.quantity}
            </span>
        </a>
        ${this.isVisible ? `
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                ${this.data.length ? `
                    ${this.data.map((item) => {
                        return `
                            <tr>
                                <th>${item.id}</th>
                                <td>${item.title}</td>
                                <th><img src='${item.preview}'/></th>
                                <td>${item.description}</td>
                                <td>${item.price}</td>
                                <td>${item.quantity}</td>
                                <td>
                                    <button data-product-id='${item.id}' class='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                      `
                    })
                    }
                `: `
                    <tr>
                        <td>No Data</td>
                    </tr>
                `}
                </tbody>
            </table>
        `: ''}
    `;
    }
}
customElements.define('it-cart', Cart)