const searchBox = document.querySelector('.search_box');
const icon =document.querySelector('.fa-magnifying-glass');
const iconSearch = document.querySelector('#icon_search');
const iconRemove = document.querySelector('#icon_remove');
const searchBtn = document.querySelector('.search_btn');
const inputPokemon = document.querySelector('.input_pokemon');
const pokemonId = document.querySelector('.pokemon_id');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('.pokemon_image');




async function fetchPokemon(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json();
    return data;
}
async function showPokemon(pokemon){
    const data = await fetchPokemon(pokemon);
    const {name, id}= data;

    pokemonName.innerHTML = name;
    pokemonId.innerHTML = addZero(id);
    pokemonImage.src = data['sprites']['other']['home']['front_default'];

}
searchBox.addEventListener('submit',(e)=>{
    e.preventDefault();

    showPokemon(inputPokemon.value.toLowerCase());
})

showPokemon('1')
searchBtn.addEventListener('click',()=>{
    icon.classList.toggle('fa-x')
    searchBox.classList.toggle('active');
    inputPokemon.classList.toggle('active');
    inputPokemon.value = '';
})

function addZero(id){
    return id < 10 ? "#00" + id : id < 100 ? "#0" + id : id >= 100 ? '#' + id : id;
}