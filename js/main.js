const searchBox = document.querySelector('.search_box');
const icon = document.querySelector('.fa-magnifying-glass');
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
const description = document.querySelector('.pokemon_description');

async function fetchPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (response.status == 200) {
        const data = await response.json();
        description.style.display = 'block';
        pokemonImage.style.display = 'block';
        pokemonInfo.style.display = 'block';
        pokemonPrev.style.opacity = '1';
        pokemonNext.style.transform = 'translateY(0)';
        return data;
    }
    else {
        pokemonId.innerHTML = 'Not Found 😴';
        description.style.display = 'none';
        pokemonId.style.fontSize = '9rem';
        pokemonImage.style.display = 'none';
        pokemonInfo.style.display = 'none';
        pokemonPrev.style.opacity = '0';
        pokemonNext.style.transform = 'translateY(-5rem)';

    }

}

let currentPokemon = 1;

async function showPokemon(pokemon) {
    pokemonName.innerHTML = 'Loading...'
    const data = await fetchPokemon(pokemon);
    const { name, id, height, weight } = data;
    pokemonName.innerHTML = name;
    pokemonId.innerHTML = addZero(id);
    pokemonHeight.innerHTML = height;
    pokemonWeight.innerHTML = weight;
    pokemonImage.src = data['sprites']['other']['home']['front_default'];
    pokemonAbility.innerHTML = data['abilities']['0']['ability']['name'];
    currentPokemon = id;

    const hpNumber = Math.floor(Math.random() * data.stats[0].base_stat + 1);
    const attackNumber = Math.floor(Math.random() * data.stats[1].base_stat + 1);
    const defenseNumber = Math.floor(Math.random() * data.stats[2].base_stat + 1);
    const specialAtkNumber = Math.floor(Math.random() * data.stats[3].base_stat + 1);
    const specialDefenseNumber = Math.floor(Math.random() * data.stats[4].base_stat + 1);
    const speedNumber = Math.floor(Math.random() * data.stats[5].base_stat + 1);

    document.querySelector('.hp_number').innerHTML = hpNumber < 10 ? '0' + hpNumber : hpNumber;
    document.querySelector('.attack_number').innerHTML = attackNumber < 10 ? '0' + attackNumber : attackNumber;
    document.querySelector('.defense_number').innerHTML = defenseNumber < 10 ? '0' + defenseNumber : defenseNumber;
    document.querySelector('.specialAtk_number').innerHTML = specialAtkNumber < 10 ? '0' + specialAtkNumber : specialAtkNumber;
    document.querySelector('.specialDefense_number').innerHTML = specialDefenseNumber < 10 ? '0' + specialDefenseNumber : specialDefenseNumber;
    document.querySelector('.speed_number').innerHTML = specialDefenseNumber < 10 ? '0' + specialDefenseNumber : specialDefenseNumber;  

    const hp = document.querySelector('.hp');
    const attack = document.querySelector('.attack');
    const defense =  document.querySelector('.denfese');
    const specialAtk = document.querySelector('.specialAtk');
    const specialDefense = document.querySelector('.specialDefense');
    const speed = document.querySelector('.speed');
    hp.style.width =  hpNumber + '%';
    attack.style.width =  attackNumber + '%';
    defense.style.width =  defenseNumber + '%';
    specialAtk.style.width = specialAtkNumber + '%';
    specialDefense.style.width = specialDefenseNumber + '%';
    speed.style.width = speedNumber + '%';

}
searchBox.addEventListener('submit', (e) => {
    e.preventDefault();

    showPokemon(inputPokemon.value.toLowerCase());
})

showPokemon(currentPokemon);


searchBtn.addEventListener('click', () => {
    icon.classList.toggle('fa-x');
    searchBox.classList.toggle('active');
    inputPokemon.classList.toggle('active');
    inputPokemon.value = '';
})
pokemonNext.addEventListener('click', () => {
    currentPokemon++;
    showPokemon(currentPokemon);
})
pokemonPrev.addEventListener('click', () => {
    if (currentPokemon > 1) {
        currentPokemon--;
        showPokemon(currentPokemon);
    }

})

function addZero(id) {
    return id < 10 ? "#00" + id : id < 100 ? "#0" + id : id >= 100 ? '#' + id : id;
}
