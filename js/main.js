const searchBox = document.querySelector('.search_box');
const searchBtn = document.querySelector('.search_btn');
const cancelBtn = document.querySelector('.cancel_btn');
const inputPokemon = document.querySelector('.input_pokemon');



searchBtn.addEventListener('click',()=>{
    searchBox.classList.toggle('active');
    inputPokemon.classList.toggle('active');
    
})