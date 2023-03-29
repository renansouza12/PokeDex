const searchBox = document.querySelector('.search_box');
const icon =document.querySelector('.fa-magnifying-glass');
const iconSearch = document.querySelector('#icon_search');
const iconRemove = document.querySelector('#icon_remove');
const searchBtn = document.querySelector('.search_btn');
const inputPokemon = document.querySelector('.input_pokemon');
const pokemonId = document.querySelector('.pokemon_id');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('.pokemon_image');
const pokemonHeight = document.querySelector('.pokemon_height');
const pokemonWeight = document.querySelector('.pokemon_weight');
const pokemonAbility = document.querySelector('.pokemon_ability');
const pokemonInfo = document.querySelector('.pokemon_informations');
const arrows = document.querySelector('.arrows')
const pokemonNext = document.querySelector('.arrow_next');
const pokemonPrev = document.querySelector('.arrow_prev');

async function fetchPokemon(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(response.status == 200){
        const data = await response.json();
         pokemonImage.style.display = 'block';
         pokemonInfo.style.display = 'block';  
         pokemonId.style.fontSize = '15rem';
         pokemonPrev.style.opacity = '1';
         pokemonNext.style.transform = 'translateY(0)';
        return data;  
    }
    else{
        pokemonId.innerHTML = 'Not Found 😴'
        pokemonId.style.fontSize = '9rem';
        pokemonImage.style.display = 'none';
        pokemonInfo.style.display = 'none';  
        pokemonPrev.style.opacity = '0';
        pokemonNext.style.transform = 'translateY(-5rem)';
        
    }
   
}

let currentPokemon = 1;

async function showPokemon(pokemon){
    pokemonName.innerHTML = 'Loading...'
    const data = await fetchPokemon(pokemon);
    const {name, id, height, weight}= data; 
    pokemonName.innerHTML = name;
    pokemonId.innerHTML = addZero(id); 
    pokemonHeight.innerHTML = height;
    pokemonWeight.innerHTML = weight;
    pokemonImage.src = data['sprites']['other']['home']['front_default'];
    pokemonAbility.innerHTML = data['abilities']['0']['ability']['name'];
    currentPokemon = id;
}
searchBox.addEventListener('submit',(e)=>{
    e.preventDefault();

    showPokemon(inputPokemon.value.toLowerCase());
})

showPokemon(currentPokemon);


searchBtn.addEventListener('click',()=>{
    icon.classList.toggle('fa-x')
    searchBox.classList.toggle('active');
    inputPokemon.classList.toggle('active');
    inputPokemon.value = '';
})
pokemonNext.addEventListener('click',()=>{
    currentPokemon ++;
    showPokemon(currentPokemon);
})
pokemonPrev.addEventListener('click',()=>{
    if(currentPokemon > 1){
        currentPokemon --;
        showPokemon(currentPokemon);
    }
  
})

function addZero(id){
    return id < 10 ? "#00" + id : id < 100 ? "#0" + id : id >= 100 ? '#' + id : id;
}