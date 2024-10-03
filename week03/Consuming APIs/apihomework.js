const indexMain = document.querySelector('main');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey ='ffe61aadd59c22f5b4f49d97471830f4';
const myLat ='49.759654069316746';
const myLon ='6.644248775359994';


const myUrl = `//api.openweathermap.org/data/2.5/?lat=${myLat}&lon=${myLon}&appid=${myKey}`;


async function apiFetch(){
    try {
        const response = await fetch(myUrl);
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

function displayResults(d){
    indexMain.innerHTML = d.name;
    captionDesc.innerHTML=d.weather[0].description;
    currentTemp.innerHTML=`${d.main.temp}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

}

apiFetch();

