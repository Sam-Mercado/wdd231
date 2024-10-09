import { temples } from '../data/temples.js';
import { url } from '../data/temples.js';
console.log(temples);
console.log(url);

//name
//{dedicated}by{person} as temple number {number} 
const showHere = document.querySelector("#showHere");//box where the elements are showing
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");
myclose.addEventListener("click",() => mydialog.close());

function displayItems(){
    temples.forEach(element => {
        const photo = document.createElement("img");
        photo.src=`${url}${element.path}`
        photo.alt = element.name


        photo.addEventListener('click',()=> showStuff(element));
        showHere.appendChild(photo);
    });
};

displayItems();


function showStuff(x){
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Dedicated on ${x.dedicated} by ${x.person} as a temple number ${x.number}`;
    mydialog.showModal();
}