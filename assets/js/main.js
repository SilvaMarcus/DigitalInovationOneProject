
const offset = 0;
let limit = 8;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonToli = (pokemon) => {
  
     return  `
     <li class="pokemon fire ">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
               <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
               </ol>
               <img src="../pokemon.png" alt="${pokemon.name}">
          </div>
     </li>`

}

const pokemonOl = document.getElementById('pokemonList');



   
     pokemonOl.innerHTML += estruturaHTml
   
}  




