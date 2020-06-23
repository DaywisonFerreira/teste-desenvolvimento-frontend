import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import Pokeball from '../../assets/pokeball.png';

import PokemonCard from '../../components/PokemonCard';
import Modal from '../../components/Modal';
import PokemonType from '../../components/PokemonType';

import api from '../../services/api';

import {
  Container,
  Content,
  ActionsContent,
  SearchContent,
  LimitContent,
  PokemonsList,
  PokemonDetail,
  PokemonInfo,
  Pagination,
  PaginationButton,
  PaginationItem,
} from './styles';

interface Pokemon {
  id: string;
  name: string;
  pokedex_number: string;
  img_name: string;
  generation: string;
  evolution_stage: string;
  evolved: string;
  family_id: string;
  cross_gen: string;
  type_1: string;
  type_2: string;
  weather_1: string;
  weather_2: string;
  stat_total: string;
  atk: string;
  def: string;
  sta: string;
  legendary: string;
  aquireable: string;
  spawns: string;
  regional: string;
  raidable: string;
  hatchable: string;
  shiny: string;
  nest: string;
  new: string;
  not_gettable: string;
  future_evolve: string;
  cp_40: string;
  cp_39: string;
  image_url?: string;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [limit, setLimit] = useState(20);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [pokemonData, setPokemonData] = useState<Pokemon>(pokemons[0]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  async function loadPokemons() {
    const response = await api.get('/pokemons', {
      params: {
        filter,
        limit,
        page: currentPage,
      },
    });
    const total = response.headers['x-total-count'];
    const totalPages = Math.ceil(total / limit);

    const arrayPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages);
    setPokemons(response.data);
  }

  useEffect(() => {
    loadPokemons();
  }, [filter, currentPage, limit]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value);
    setCurrentPage(1);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
  }

  const handleModal = (pokemon: Pokemon) => {
    setPokemonData(pokemon);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    if (isModalVisible) {
      setIsModalVisible(false);
    }
  };

  const handleEditModal = (id: string) => {
    history.push(`/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      'Tem certeza que deseja deletar esse pokémon? ',
    );

    if (confirm) {
      try {
        await api.delete(`/pokemon/${id}`);

        loadPokemons();

        toast.success('Pokémon excluído com sucesso');
      } catch (error) {
        toast.error('Erro ao excluir o pokemon, tente novamente mais tarde');
      }
    }
  };

  return (
    <Container onClick={() => handleModalClose()}>
      <Content>
        <h3>Pokédex</h3>
        <Modal isVisible={isModalVisible}>
          {pokemonData && (
            <PokemonDetail>
              <div className="pokemon-name">
                <img src={pokemonData.image_url || Pokeball} alt="" />
                <h3>{pokemonData.name}</h3>
              </div>
              <div>
                <h3>Detalhes do pokémon</h3>

                <PokemonInfo>
                  <div>
                    Pokedex Number
                    <span>{pokemonData.pokedex_number}</span>
                  </div>
                  <div>
                    Generation
                    <span>{pokemonData.generation}</span>
                  </div>
                  <div>
                    Evolution Stage
                    <span>{pokemonData.evolution_stage}</span>
                  </div>
                  <div>
                    Evolved
{' '}
<span>{pokemonData.evolved}</span>
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    Family ID
                    <span>{pokemonData.family_id}</span>
                  </div>
                  <div>
                    Cross Gen
                    <span>{pokemonData.cross_gen}</span>
                  </div>
                  <div>
                    Types <PokemonType type={pokemonData.type_1} />
                    {pokemonData.type_2 && (
                      <PokemonType type={pokemonData.type_2} />
                    )}
                  </div>
                  <div>
                    Weathers
                    <span>{pokemonData.weather_1}</span>
                    {pokemonData.weather_2 && (
                      <span>{pokemonData.weather_2}</span>
                    )}
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    Stat Total
                    <span>{pokemonData.stat_total}</span>
                  </div>
                  <div>
                    ATK
                    <span>{pokemonData.atk}</span>
                  </div>
                  <div>
                    DEF
                    <span>{pokemonData.def}</span>
                  </div>
                  <div>
                    STA
                    <span>{pokemonData.sta}</span>
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    Legendary
                    <span>{pokemonData.legendary}</span>
                  </div>
                  <div>
                    Aquireable
                    <span>{pokemonData.aquireable}</span>
                  </div>
                  <div>
                    Spawns
                    <span>{pokemonData.spawns}</span>
                  </div>
                  <div>
                    Regional
                    <span>{pokemonData.regional}</span>
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    Raidable
                    <span>{pokemonData.raidable}</span>
                  </div>
                  <div>
                    Hatchable
                    <span>{pokemonData.hatchable}</span>
                  </div>
                  <div>
                    Shiny
                    <span>{pokemonData.shiny}</span>
                  </div>
                  <div>
                    Nest
                    <span>{pokemonData.nest}</span>
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    New
                    <span>{pokemonData.new}</span>
                  </div>
                  <div>
                    Not Gettable
                    <span>{pokemonData.not_gettable}</span>
                  </div>
                  <div>
                    Future Evolve
                    <span>{pokemonData.future_evolve}</span>
                  </div>
                  <div>
                    100% CP @ 39 <span>{pokemonData.cp_39}</span>
                  </div>
                </PokemonInfo>

                <PokemonInfo>
                  <div>
                    100% CP @ 40
                    <span>{pokemonData.cp_40}</span>
                  </div>
                </PokemonInfo>
              </div>
            </PokemonDetail>
          )}
        </Modal>
        <ActionsContent>
          <SearchContent>
            <span>Filtrar</span>
            <input
              value={filter}
              onChange={(e) => handleInputChange(e)}
              placeholder="Nome ou tipo do pokémon"
            />
          </SearchContent>
          <Link to="/register">Novo Pokemon</Link>
          <LimitContent>
            <span>Por página</span>
            <select name="" id="" onChange={(e) => handleSelectChange(e)}>
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
            </select>
          </LimitContent>
        </ActionsContent>

        <PokemonsList>
          {pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.pokedex_number}
                name={pokemon.name}
                type1={pokemon.type_1}
                type2={pokemon.type_2 || ''}
                pokemon_url={pokemon.image_url}
                handleViewClick={() => handleModal(pokemon)}
                handleEditClick={() => handleEditModal(pokemon.id)}
                handleDeleteClick={() => handleDelete(pokemon.id)}
              />
            ))
          ) : (
            <p>Nenhum pokémon</p>
          )}
        </PokemonsList>
        {pokemons.length > 0 ? (
          <Pagination>
            <PaginationButton>
              {currentPage > 1 && (
                <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </PaginationItem>
              )}
              {pages.map((page) => (
                <PaginationItem
                  isSelect={page === currentPage}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationItem>
              ))}
              {currentPage < pages.length && (
                <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </PaginationItem>
              )}
            </PaginationButton>
          </Pagination>
        ) : null}
      </Content>
    </Container>
  );
};

export default PokemonList;
