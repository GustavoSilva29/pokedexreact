// Add - Salva a lista de pokemons no localStorage
export function SavePokemons(list) {
  localStorage.setItem("pokedex_pokemons", JSON.stringify(list));
}

//----------------------------------------------

// Verify - Verifica a existência de pokemons salvos no localStorage
export function VerifyPokemons() {
  var pokemons = localStorage.getItem("pokedex_pokemons");
  return JSON.parse(pokemons);
}
