/*const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname);*/

const url = `https://kea-alt-del.dk/t7/api/products?limit=100&brandname=${brandname}`;

 
//fetch the data
fetch(url)
.then((res) => res.json())
.then((data) => showProduct(data));



fetch(url)
.then (function (res){
    return res.json();
})
.then (function(data){
    handleProductList(data);
})


function handleProductList(data) {
console.log(data);
data.forEach(showProduct);
}

function showProduct(product){
//grab the template - creo la template en HTML y hago este const con el ID de la template
const template = document.querySelector("#smallProductTemplate").content;
//clone it
const copy = template.cloneNode(true);


//change content with query selector: vamos a ir agarrando cada caracteristica que tenga cada producto de la lista, e ir cambiandolo acorde a lo que hay en cada producto y lo que hay en la lista que fetchie. 

//entonces digo esto de aca abajo, agarro la clase "subtle" que esta dentro de Copy, osea del html. Y la cambio por los valores de la lista de informacion.


copy.querySelector(".subtle").textContent = `${product.article} | ${product.brandname}`; 
copy.querySelector("h3").textContent = product.productdisplayname; 

// esto que voy a hacer aca abajo es para decir que si el producto esta sold out, agarro el articulo entero, y le agrego la clase de css de soldout


if(product.soldout){
 copy.querySelector("article").classList.add("soldOut");
}
if(product.discount){
 copy.querySelector("article").classList.add("onSale");

 copy.querySelector(".discounted p").textContent = product.price * product.discount /100; 
}

//grab parent: i select where i want to put it
const parent = document.querySelector("main");
//append 
parent.appendChild(copy);
}