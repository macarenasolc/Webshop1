fetch("https://kea-alt-del.dk/t7/api/brands")
.then(res=>res.json())
.then(goThroughEach)

//forreach
function goThroughEach(data){
    console.log(data);
    data.forEach(showBrand)
}

//thatFunction - aca es individual. antes era todo el array y ahora es one at a time
function showBrand(oneBrand){
//find the first letter

const firstLetter = oneBrand.brandname.charAt(0).toLowerCase()

//do all the stuff from above
//grab template
const template = document.querySelector("template").content;

//clone it
const myCopy = template.cloneNode(true);

//change some content
myCopy.querySelector("a").textContent = oneBrand.brandname;
myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`
//find the correct parent

console.log(oneBrand);


//find the parent
const parent = document.querySelector(`#letter_${firstLetter}`);
if (parent){
//append it - only append IF you find the parent
parent.appendChild(myCopy);
}




}