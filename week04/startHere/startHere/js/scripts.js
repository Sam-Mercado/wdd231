const currentUrl = window.location.href;
console.log(currentUrl);
const everything = currentUrl.split("?");
const formData = everything[1].split("&");


const showInfo = document.querySelector('#results');




function show(cup){
    console.log(cup);
    formData.forEach((element)=>{
        if(element.startsWith(cup)){
            console.log('Match found');
            result = element.split("=")[1].replace("%40","@")
            result = result.replace("+"," ")
        }
    });
    return(result);
}

showInfo.innerHTML= `
    <p>Appointment for ${show("first")} ${show("last")}</p>
    <p><b>proxy: </b>${show("ordinance")}at ${show("location")} temple on ${show("fecha")}</p>
    <p><b>email: </b><a href="mailto:${formData[3].split("=")[1].replace("%40","@")}">${show("email")}</a></p>
`
