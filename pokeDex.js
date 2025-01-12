let input = document.getElementById('search-input');
let click = document.getElementById('search-button');
let pokeName = document.getElementById('pokemon-name');
let pokeId = document.getElementById('pokemon-id');
let pokeWeight = document.getElementById('weight');
let pokeHeight = document.getElementById('height');
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
  //console.log(a.value)
  let b = a.value;
    try {
      const response = await fetch(poke(b));
      console.log(response.status)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      console.log(json);
     statMaster(json)
     typeMaster(json)
     hwMaster(json)
     // console.log(json.headers)
      
    } catch (error) {
      console.error(error.message);
    } 
  }
 // getData()
 function statMaster(a) {
  let statSpread = [
    ["hp", document.getElementById('hp')],
    ["attack", document.getElementById('attack')],
    ["defense", document.getElementById('defense')],
    ["special-attack", document.getElementById('special-attack')],
    ["special-defense", document.getElementById('special-defense')],
    ["speed", document.getElementById('speed')]
  ]
  let i = 0;
  const temp = (a) => {    
    const { stats } = a;
    
    while(i < stats.length) {
      const out = stats[i];
      const { base_stat } = out;
      //console.log(base_stat)
      statSpread[i][1].innerHTML = `${statSpread[i][0]}: ${base_stat}`
      i++
    }
    
  }
  temp(a)
  //Name and Id
  const { name } = a;
  const { id } = a;
  pokeName.innerHTML = `Name: ${name} #${id}`
 }

 function typeMaster(a) {
  const { types } = a;
  let i = 0;
  let output = [];
 // console.log(name)
  while(types.length > i) {
   const out = types[i]
   const { type } = out;
   const { name } = type;
   //console.log(name)
   output.push(name)
   i++
  }
  type.innerHTML = `Types: ${output}`
 }
 function hwMaster(a) {
 const { height } = a;
 const { weight } = a
 const { sprites } = a;
 const { front_default } = sprites;
 pokeHeight.innerHTML = `Height: ${height}`
 pokeWeight.innerHTML = `Weight: ${weight}`
 let img = document.createElement('img');
 img.src = front_default;
 document.getElementById('id').appendChild(img);
 }