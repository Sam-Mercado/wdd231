const questions = document.querySelector('#faqs');

async function getQuestions(){
    let responce = await fetch('./data/cardsInformation.json');
    let data = await responce.json();
    
    displayQuestions(data.faqs);
}

const displayQuestions = (d)=>{
    d.forEach(element => {
        let card = document.createElement('div');
        let titleDiv = document.createElement('div')
        let titleH5 = document.createElement('h5');
        let contentDiv = document.createElement('div');
        let content = document.createElement('p');

        card.id = 'questions';
        card.classList.add('content-flex-column2');
        titleDiv.classList.add('titleDiv');
        contentDiv.classList.add('contentDiv');

        titleH5.innerHTML=`${element.question}`;
        content.innerHTML = `${element.answer}`;

        card.appendChild(titleDiv);
        card.appendChild(contentDiv);
        titleDiv.appendChild(titleH5);
        contentDiv.appendChild(content);

        questions.appendChild(card);

    });
}

getQuestions();