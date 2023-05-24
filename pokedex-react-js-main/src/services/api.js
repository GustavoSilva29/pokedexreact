import axios from "axios";

// Cria uma instância do axios com a base URL da PokeAPI
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default api;
