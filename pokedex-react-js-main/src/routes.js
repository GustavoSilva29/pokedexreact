import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function Routes() {
  return (
    <div className="app">
      {/* Configuração do BrowserRouter para envolver as rotas */}
      <BrowserRouter>
        {/* Definição das rotas */}
        <Switch>
          {/* Rota para a página inicial, com um parâmetro de consulta opcional */}
          <Route exact path="/:query?" component={Home} />
          {/* Rota para a página de detalhes, com um parâmetro de nome opcional */}
          <Route exact path="/details/:name?" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
