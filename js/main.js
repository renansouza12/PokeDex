const searchBox = document.querySelector('.search_box');
const icon =document.querySelector('.fa-magnifying-glass')
const searchBtn = document.querySelector('.search_btn');
const inputPokemon = document.querySelector('.input_pokemon');
const iconSearch = document.querySelector('#icon_search');
const iconRemove = document.querySelector('#icon_remove');



searchBtn.addEventListener('click',()=>{
    icon.classList.toggle('fa-x')
    searchBox.classList.toggle('active');
    inputPokemon.classList.toggle('active');
    inputPokemon.value = '';
    
})