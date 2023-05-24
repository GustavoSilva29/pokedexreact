import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorites }}

        >
            {children}
        </FavoritesContext.Provider>

    );
}

export function useFavoriteContext() {
    const { favorite, setFavorites } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        setFavorites((prevFavorites) => {
            const repeatedFavorite = prevFavorites.some((item) => item.id === newFavorite.id);

            if (!repeatedFavorite) {
                return [...prevFavorites, newFavorite]; // Adiciona o novo favorito à lista
            } else {
                return prevFavorites.filter((fav) => fav.id !== newFavorite.id); // Remove o favorito existente da lista
            }
        });
    }

    return {
        favorite,
        addFavorite
    };
}
