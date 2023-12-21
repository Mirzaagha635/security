const div = document.getElementById('productsList')

function getgetir () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index)=> {
        console.log(item);
        const box = document.createElement('div');
        box.className = 'boxDiv col-xl-4 col-lg-6 col-md-6 col-sm-12';
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <p class='title'>${item.title}</p>
            <p>${item.price}$</p>
            <button class='boxbtn' onclick="removeItem(${index})">Delete</button>
        `;
        div.appendChild(box);
    });

}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getgetir()
}
window.onload = () => {
    getgetir()
}