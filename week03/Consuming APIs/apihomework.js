const indexMain = document.querySelector('main');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey ='e1d3b62518b56abd4811d6a72b8ced76';
const myLat ='49.75';
const myLon ='6.64';


const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;


//https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}appid=${myKey}&units=imperial


async function apiFetch(url){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error){
        console.log(error);
    }

};

apiFetch(myUrl);


function displayResults(d){
    indexMain.innerHTML = d.name;
    captionDesc.innerHTML=d.weather[0].description;
    currentTemp.innerHTML=`${d.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

}


