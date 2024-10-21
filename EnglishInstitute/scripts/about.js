const team = document.querySelector("#team");
async function getTeam(a){
    try{
        const response = await fetch('./data/cardsInformation.json'); 
        if(response.ok){
            const data = await response.json();
            console.log(data.teachers)

            data.teachers.forEach(element => {
                //create elements
                let card = document.createElement('div');
                let cardImg = document.createElement('img');
                let cardTitle = document.createElement('h5');
                let cardPargf = document.createElement('p')
        
                card.classList.add('content-flex-roe');
                card.classList.add('team-card');
                cardImg.classList.add('picture');
        
                //populateelements
                cardImg.src = `${element.image}`;
                cardImg.loading = "lazy";
                cardTitle.innerHTML = `${element.name}`;
                // cardPargf.innerHTML = `${element.description}`;
        
                //append
        
                card.appendChild(cardImg);
                card.appendChild(cardTitle);
                // card.appendChild(cardPargf);
        
                a.appendChild(card);
         } )
        }else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

getTeam(team)