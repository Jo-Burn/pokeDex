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
click.addEventListener('click', clear())
class Pokemon {
 constructor(name) {
    this.name = poke(name);
 }
}
function string(a) {
// console.log(`work`)
let b = a.value;
let toString = /^[A-Za-z]\D+$/;
 if(toString.test(b)) {
  //console.log(b)
  let c = b.toLowerCase();
  console.log(c)
  return getData(c)
 } else {
  console.log(`try again`)
  return getData(b)
 }
  
}

//gets Data form api 
async function getData(a) {
  //console.log(a.value)
    try {
      const response = await fetch(poke(a));
      console.log(response.status)
      if (!response.ok) {
        if(response.status == 404) {
          window.alert(`Please Enter a Valid Pokemon name or ID`)
        }
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
//  let i = 0;
 // let output = [];
 // console.log(name)
  /* while(types.length > i) {
   const out = types[i]
   const { type } = out;
   const { name } = type;
   //console.log(name)
   //output.push(name)
   types.innerHTML = `<span>${name.toUpperCase}</span>`
   i++
  }
  //type.innerHTML = `Types: ${output}` */
  type.innerHTML = types.map(type => `<span>${type.type.name.toUpperCase()}</span>`);
 }
 function hwMaster(a) {
 let img = []
 const { height } = a;
 const { weight } = a
 const { sprites } = a;
 const { front_default } = sprites;
 pokeHeight.innerHTML = `Height: ${height}`
 pokeWeight.innerHTML = `Weight: ${weight}`
 img = document.createElement('img');
 img.src = front_default;
 document.getElementById('id').appendChild(img);
 }
 function clear() {
  type.innerHTML = ``;
}