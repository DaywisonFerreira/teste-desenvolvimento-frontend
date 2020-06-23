import React from 'react';

import { Badge } from 'react-bootstrap';

import { MdVisibility, MdModeEdit, MdDelete } from 'react-icons/md';
import PokemonType from '../PokemonType';

import PokeballImg from '../../assets/pokeball.png';

import {
  PokemonContent,
  BoxActionAvatar,
  Actions,
  PokemonTypes,
} from './styles';

interface PokemonData {
  name: string;
  type1: string;
  type2?: string;
  pokemon_url?: string;
  handleViewClick: () => void;
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}

const PokemonCard: React.FC<PokemonData> = ({
  name,
  type1,
  type2,
  pokemon_url,
  handleViewClick,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <PokemonContent>
      <BoxActionAvatar>
        <img src={pokemon_url || PokeballImg} alt="" />
        <Actions>
          <button type="button" title="Visualizar" onClick={handleViewClick}>
            <MdVisibility />
          </button>
          <button type="button" title="Editar" onClick={handleEditClick}>
            <MdModeEdit />
          </button>
          <button type="button" title="Excluir" onClick={handleDeleteClick}>
            <MdDelete />
          </button>
        </Actions>
      </BoxActionAvatar>
      <h3>{name}</h3>
      <PokemonTypes>
        <PokemonType type={type1} />
        {type2 && <PokemonType type={type2}>{type2}</PokemonType>}
      </PokemonTypes>
    </PokemonContent>
  );
};

export default PokemonCard;
