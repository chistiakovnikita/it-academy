import './Card.js'
import './Cart.js'

class App extends HTMLElement {
    constructor() {
        super()
        this.data = [

            {
                id: 1,
                title: 'Product #1',
                preview: './img/1.jpeg',
                description: 'рефлектор Ньютона, диаметр: 203 мм, фокусное расстояние: 1200 мм, относительное отверстие: 1/6, Добсона монтировка, окуляры 10 мм/25 мм',
                price: 100,
            },

            {
                id: 2,
                title: 'Product #2',
                preview: './img/2.jpg',
                description: 'рефлектор Ньютона, диаметр: 130 мм, фокусное расстояние: 900 мм, относительное отверстие: 1/6.9, экваториальная (EQ) монтировка, окуляры 10 мм/25 мм',
                price: 200,
            },

            {
                id: 3,
                title: 'Product #3',
                preview: './img/3.jpg',
                description: 'ахроматический рефрактор, диаметр: 70 мм, фокусное расстояние: 500 мм, относительное отверстие: 1/7, азимутальная (AZ) монтировка, окуляры 10 мм/25 мм',
                price: 300,
            },

            {
                id: 4,
                title: 'Product #4',
                preview: './img/4.jpg',
                description: 'ахроматический рефрактор, диаметр: 70 мм, фокусное расстояние: 700 мм, относительное отверстие: 1/10, азимутальная (AZ) монтировка, окуляры 9 мм/25 мм',
                price: 400
            }
        ]
    }

    connectedCallback() {
        this.render()

    }


    


    render() {
        this.innerHTML = `
        <div class='container mt-5 mb-5'
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
       </div>
        <div class="container">
            <div class="row">
                ${this.data.map((item) => {
                    return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                    `
                }).join(' ')}
            </div>
        </div>
        
        `
    }


}


customElements.define('it-app', App)