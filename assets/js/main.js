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

pokeApi.getPokemons(0,8).then((pokemons) => {
     pokemonOl.innerHTML += pokemons.map(pokemonToli).join('')

})


