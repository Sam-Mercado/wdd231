const filterButtons = document.querySelectorAll('.filter-buttons button');
// const courseButton = document.querySelectorAll('.course.btn');
const course = document.querySelector(".courses"); 


filterButtons.forEach( button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterCourses(filter);
    });
});


const buttons = [
    { id: 1, label: 'CSE 110', className: 'course-button', category: 'CSE' },
    { id: 2, label: 'CSE 111', className: 'course-button', category: 'CSE' },
    { id: 3, label: 'WDD 130', className: 'course-button', category: 'WDD' },
    { id: 4, label: 'WDD 131', className: 'course-button', category: 'WDD' },
    { id: 5, label: 'WDD 231', className: 'course-button', category: 'WDD' }
];


buttons.forEach(buttonObj =>{
    const newButton = document.createElement('button');
    newButton.textContent = buttonObj.label;
    newButton.classList.add(buttonObj.className)
});
// Limpiar el div, y crear elementos de una lista 
// 1:Crear un array que contiene las 6 courses 

// 2: crear una funion que cree botones, 
// 3: btn= clase y category.
//4: loop de los contenidos de la lista
function filterCourses(filter){
    console.log(filter);
    console.log(courseButton);
    courseButton.forEach(course => {
        
        if(filter=='all'){
            course.computedStyleMap.display = 'block';
        } else if (course.getAttribute('data-category') == filter){
            course.computedStyleMap.display = 'block';
        } else {course.style.display = 'block'}
    });
}


// footer

const year = document.querySelector('#year');
const today = new Date();
year.innerHTML = `<span class='highlight'> ${today.getFullYear()}</span>&copy; Samuel Mercado Perez 🇧🇴`;