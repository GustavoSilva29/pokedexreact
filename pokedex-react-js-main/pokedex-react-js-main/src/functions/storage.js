//Adiciona 
export function SavePokemons(list) {
  localStorage.setItem("pokedex_pokemons", JSON.stringify(list));
}

// Verifica
export function VerifyPokemons() {
  var pokemons = localStorage.getItem("pokedex_pokemons");
  return JSON.parse(pokemons);
}
