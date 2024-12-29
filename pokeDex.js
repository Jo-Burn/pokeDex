let input = document.getElementById('search-input');
let click = document.getElementById('search-button');
let name = document.getElementById('pokemon-name');
let pokeId = document.getElementById('pokemon-id');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let type = document.getElementById('types');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let sAttack = document.getElementById('special-attack');
let sDefense = document.getElementById('special-defense');
let speed = document.getElementById('speed');
const poke = (b)=> {
    let c = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${b}/`
    return c
}
//click.onclick = function() {getData(32)};
class Pokemon {
 constructor(name) {
    this.name = poke(name);
 }
}
//click.addEventListener(click, getData(input))
async function getData(a) {
  console.log(a)
    try {
      const response = await fetch(poke(70));
      console.log(response.status)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    } 
  }
 // getData()