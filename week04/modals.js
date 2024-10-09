const showNumber = document.getElementById('showNumber');
const favDialog = document.getElementById('favDialog');
const number = document.getElementById('number');
// console.log("js connected");
showNumber.addEventListener('click', () => {
  number.innerText = Math.floor(Math.random() * 1000);
  favDialog.showModal();
});
