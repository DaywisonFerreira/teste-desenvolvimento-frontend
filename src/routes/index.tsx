import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PokemonList from '../pages/PokemonList';
import PokemonRegister from '../pages/PokemonRegister';
import PokemonEdit from '../pages/PokemonEdit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PokemonList} />
    <Route path="/register" exact component={PokemonRegister} />
    <Route path="/edit/:id" exact component={PokemonEdit} />
  </Switch>
);

export default Routes;
