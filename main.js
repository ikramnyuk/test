// var productForm = document.getElementById('product-form');

// productForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     var productName = document.getElementById('name').value,
//         productPrice = document.getElementById('price').value,
//         productQtu = document.getElementById('qtu').value;

//     renderData(productName, productPrice, productQtu);

//     productForm.reset();
// });

// function renderData(name, price, qtu){
//     var list = document.getElementById('list'),
//         row = document.createElement('div');
    
//     row.innerHTML = "<span>" + name + " </span><span>" + price + "</span><span>" + qtu + "</span>";
//     row.setAttribute('class', 'row');

//     list.appendChild(row);
// }

document.addEventListener('mousemove', function(e){
    console.log('x: ' + e.clientX, 'y: ' + e.clientY);
})