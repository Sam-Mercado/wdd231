const filterButtons = document.querySelectorAll('.filter-buttons button');
const courseButton = document.querySelectorAll('.course.btn');


filterButtons.forEach( button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterCourses(filter);
    });
});


function filterCourses(filter){
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