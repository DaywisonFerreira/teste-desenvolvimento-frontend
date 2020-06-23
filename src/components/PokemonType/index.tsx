import React from 'react';

import { Content } from './styles';

interface PokemonTypeData {
  type: string;
}

const PokemonType: React.FC<PokemonTypeData> = ({ type }) => {
  return <Content type={type}>{type}</Content>;
};

export default PokemonType;
