const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/3.0/onecall/overview?lat=49.759654069316746&lon=6.644248775359994&appid=6a8fc707a9dba6c994341f21d5ac9fe5';


async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error){
        console.log(error);
    }

};

apiFetch();