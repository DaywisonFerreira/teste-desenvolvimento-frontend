import styled from 'styled-components';

import { colorTypes } from '../../styles/pokemonTypes';

interface PokemonTypeProps {
  type: string;
}

export const Content = styled.span<PokemonTypeProps>`
  background: ${(props) =>
    colorTypes[props.type] ? colorTypes[props.type] : '#BDB76B'};
  width: 60px;
  text-align: center;
  color: #fff !important;
  border-radius: 5px;
`;
