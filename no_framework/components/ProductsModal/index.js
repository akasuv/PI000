import "./index.css";

function createProductsModal() {
    const modalWrapper = document.createElement('div');
    modalWrapper.className = 'modal-wrapper';

    var dragged;
    let productList = new Array(44).fill('url(https://ssl.gstatic.com/gb/images/p2_4b3829c9.png)').map(( item, index ) => {
        const product = document.createElement('div');
        product.draggable = true;
        product.classList = ['product'];
        product.classList.add(`product_${index}`)

        const icon = document.createElement('div');
        icon.classList = ['icon']
        icon.style.backgroundImage = item 
        icon.style.backgroundSize = "64px 3100px";
        console.log()
        icon.style.backgroundPosition = `0 -${index * 69}px`;


        product.addEventListener('dragstart', function(e){
            dragged = e.target;
        }) 

        product.setAttribute("ondragover", "return false");

        product.append(icon);

        return product;
    })


    modalWrapper.addEventListener('drop', function(e) {
        console.log(dragged, e.target.parentNode)
        // this.replaceChild(dragged, e.target.parentNode)
        let cloneNode = dragged.cloneNode(true);
        cloneNode.classList = e.target.parentNode.classList;

        e.target.parentNode.replaceWith(cloneNode)
    })

    modalWrapper.append(...productList);


    return modalWrapper;
}

export default createProductsModal;