// const btn = document.querySelector('.btn')


// btn.addEventListener(('click'), (evt) => {
//     const event = new CustomEvent('show-notification', {   // создание события
//         bubbles: true,
//     });
//     evt.currentTarget.dispatchEvent(event)                 // отправка
// })


// window.addEventListener('show-notification', (evt) => {
//     const toast = document.querySelector('.toast')
//     toast.classList.add('show') 

// })



const btn = document.querySelector('.btn')


btn.addEventListener(('click'), (evt) => {
    const event = new CustomEvent('show-notification', {   // создание события
        bubbles: true,
        detail: {
            title: 'Hello',
            description: 'sfdmfmsddslf',
        }
    });
    evt.currentTarget.dispatchEvent(event)                 // отправка
})


window.addEventListener('show-notification', (evt) => {
    const toast = document.querySelector('.toast');
    toast.classList.add('show');
    toast.querySelector('.title').textContent = evt.detail.title;
    toast.querySelector('.description').textContent = evt.detail.description;

})



