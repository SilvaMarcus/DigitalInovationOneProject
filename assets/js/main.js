
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



/* requisicao */
fetch(url,)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemons) => {

for ( i = 0; i < pokemons.length; i++) {

     const pokemon = pokemons[i];
     const estruturaHTml = pokemonToli(pokemon);
   
     pokemonOl.innerHTML += estruturaHTml
   
}  

})
.catch((error) => console.log(error))



















/*


<li class="pokemon ${pokemon.type}">
<span class="number">#${pokemon.number}</span>
<span class="name">${pokemon.name}</span>
<div class="detail">
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <img src="${pokemon.photo}"
         alt="${pokemon.name}">
</div>
</li>


` */