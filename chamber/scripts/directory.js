//hamburgur menu
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click',() =>{
    navElement.classList.toggle('open');
});

//year
const year = document.querySelector('#year');
const today = new Date();

year.innerHTML = `<span class='highlight'>${today.getFullYear()}</span>&copy; Samuel Mercado Perez`;

const option = {year:'numeric', month:'long', day:'numeric'};
const lastUpdated = today.toLocaleDateString('en-US', option);

document.getElementById('last-update').textContent = `Last Update ${lastUpdated}`;



//where are we pulling the information from 
//and where do we want to display it

const data = './data/members.json';
const cards = document.querySelector('.business-card')

async function getBusinessInfo(file) {
    const response = await fetch(file);
    const data = await response.json();
    displayBusiness(file);
}

getBusinessInfo();

const displayBusiness = (busineses) =>{
    //create a card for each company
    busineses.forEach((company)=>{
        let card = documnt.createElement('section');

        card.innerHTML = `<h4>${company.name}</h4>`;

        card.innerHTML = `<p>${company.description}</p>`;
        card.innerHTML = `<p>${company.address}</p>`;
        card.innerHTML = `<p>${company.phone}</p>`;
        card.innerHTML = `<p>${company.website}</p>`;

        cards.appendChild(card);
        
    });
}

