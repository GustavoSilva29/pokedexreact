import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import FavoritesProvider from "./contexts/Favorites";

function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <FavoritesProvider>
          <Switch>
            <Route exact path="/:query?" component={Home} />
            <Route exact path="/details/:name?" component={Details} />
            <Route exact path="/src/pages/Favorites" component={FavoritesProvider} />
            <Route exact path="/src/pages/Favorites/index.js" component={FavoritesProvider} />
          </Switch>
        </FavoritesProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default Routes;
