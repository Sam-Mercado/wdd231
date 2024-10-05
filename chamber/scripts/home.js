const eventCards = document.querySelector('#current-event');

async function getEvent(){
    const response = await fetch('./data/events.json');
    const data = await response.json();
    displayCards(data.events);
    
    
};

getEvent();

const displayCards = (e) => {
    console.log(e);
    e.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('event-card');

        let title = document.createElement('h6');
        title.textContent = `${element.event}`;

        let eventDesc = document.createElement('p');
        eventDesc.innerHTML = `<b>About:</b> ${element.description}`;

        let eventLoc = document.createElement('p');
        eventLoc.innerHTML = `<b>Location:</b> ${element.location}`;
        
        let eventDate = document.createElement('p');
        eventDate.innerHTML = `<b>Date:</b> ${element.date}`;
        
        card.appendChild(title);
        card.appendChild(eventDesc);
        card.appendChild(eventLoc);
        card.appendChild(eventDate);

        eventCards.appendChild(card);
    });
};


//wheather 
const indexCard = document.querySelector('#weather');


const myKey = 'e1d3b62518b56abd4811d6a72b8ced76';
const myLat = '-17.366832637140057';
const myLon = '-66.19878838429028';

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;


async function weatherFetch(){
    try{
        const response = await fetch(myUrl);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error)
    }
};

weatherFetch();

function displayResults(d){

    let card = document.createElement('div');
    card.classList.add('weather-container');
    let image = document.createElement('img');
    let city = document.createElement('h6');
    let currentTemp = document.createElement('p');
    let description = document.createElement('p');

    city.innerHTML = `${d.name},${d.sys.country}`;
    currentTemp.innerHTML = `${d.main.temp}&deg;F`;
    description.innerHTML = d.weather[0].description;
    image.innerHTML = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
    image.src = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
    image.setAttribute('alt', d.weather[0].description);

    card.appendChild(city);
    card.appendChild(image)
    card.appendChild(currentTemp);
    card.appendChild(description);

    indexCard.appendChild(card);

}


const goldMembers = document.querySelector('#gold-members');

async function getGoldMember() {
    const response = await fetch("./data/members.json"); 
    const data = await response.json();
    displayGoldMember(data.companies);
    
}

async function displayGoldMember(d){
    d.forEach((element) =>{
            let card = document.createElement('div');
            card.classList.add('card-container');

            // card.className = 'card-container';
            let companyLogo = document.createElement('img');//fing a way to add a src and atl
            let companyName = document.createElement('h6');
            companyName.textContent = `${element   .name}`;
            let companyAddress = document.createElement('p');
            let websiteCo = document.createElement('p');
            websiteCo.innerHTML = `<a href ='${element.website}'>${company.website}</a>`
            companyAddress.textContent = `${element.address}`;
            let phoneNum = document.createElement('p');
            phoneNum.textContent = `${element.phone}`;
        
            //build the image
            if (element.membershipLevel === 1){
                card.appendChild(companyLogo);
                card.appendChild(companyName);
                card.appendChild(phoneNum);
                card.appendChild(companyAddress);
                card.appendChild(websiteCo);

                goldMembers.appendChild(card);
            }

    } );    
}

