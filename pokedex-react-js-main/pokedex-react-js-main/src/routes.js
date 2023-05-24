import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import FavoritesProvider from "./contexts/Favorites";

function Routes() {
  return (
    <div className="app">
      {/* Configuração do BrowserRouter para envolver as rotas */}
      <BrowserRouter>
        {/* Provedor de contexto para os favoritos */}
        <FavoritesProvider>
          {/* Definição das rotas */}
          <Switch>
            {/* Rota para a página inicial, com um parâmetro de consulta opcional */}
            <Route exact path="/:query?" component={Home} />
            {/* Rota para a página de detalhes, com um parâmetro de nome opcional */}
            <Route exact path="/details/:name?" component={Details} />
            {/* Rota para a página de favoritos */}
            <Route exact path="/src/pages/Favorites" component={FavoritesProvider} />
            {/* Rota alternativa para a página de favoritos */}
            <Route exact path="/src/pages/Favorites/index.js" component={FavoritesProvider} />
          </Switch>
        </FavoritesProvider>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
