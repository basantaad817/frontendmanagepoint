// menu bar

let menu = document.querySelector('#menu-bar');
let links = document.querySelector('.links');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  links.classList.toggle('active');

}