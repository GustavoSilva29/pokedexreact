// RemoveAspas - Remove as aspas de uma string
export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

// GetImageById - Retorna a URL da imagem de um pokemon com base no ID
export function GetImageById(id) {
  id = id.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

// DetermineGenderRate - Determina a taxa de gênero de um pokemon
export function DetermineGenderRate(gender) {
  switch (gender) {
    case -1:
      return "N/A"; // Gênero não aplicável
    case 0:
      return "0%\u2640 100%\u2642"; // Gênero exclusivamente masculino
    default:
      const female = Math.round(gender * 1250) / 100;
      const male = 100 - female;
      return `${female}%\u2640 ${male}%\u2642`; // Taxa de gênero em porcentagem feminina e masculina
  }
}
