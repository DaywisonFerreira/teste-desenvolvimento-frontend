import React, { useRef, useCallback, useState, ChangeEvent } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { FiCamera } from 'react-icons/fi';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import { Container, Content, AvatarInput } from './styles';

interface PokemonFormData {
  name: string;
  pokedex_number: string;
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
  img_name?: string;
}

const PokemonRegister: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: PokemonFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          type_1: Yup.string().required('O type é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        const dataPokemon = new FormData();

        dataPokemon.append('name', data.name);
        dataPokemon.append('pokedex_number', data.pokedex_number);
        dataPokemon.append('generation', data.generation);
        dataPokemon.append('evolution_stage', data.evolution_stage);
        dataPokemon.append('evolved', data.evolved);
        dataPokemon.append('family_id', data.family_id);
        dataPokemon.append('cross_gen', data.cross_gen);
        dataPokemon.append('type_1', data.type_1.toLowerCase());
        dataPokemon.append('type_2', data.type_2.toLowerCase());
        dataPokemon.append('weather_1', data.weather_1);
        dataPokemon.append('weather_2', data.weather_2);
        dataPokemon.append('stat_total', data.stat_total);
        dataPokemon.append('atk', data.atk);
        dataPokemon.append('def', data.def);
        dataPokemon.append('sta', data.sta);
        dataPokemon.append('legendary', data.legendary);
        dataPokemon.append('aquireable', data.aquireable);
        dataPokemon.append('spawns', data.spawns);
        dataPokemon.append('regional', data.regional);
        dataPokemon.append('raidable', data.raidable);
        dataPokemon.append('hatchable', data.hatchable);
        dataPokemon.append('shiny', data.shiny);
        dataPokemon.append('nest', data.nest);
        dataPokemon.append('new', data.new);
        dataPokemon.append('not_gettable', data.not_gettable);
        dataPokemon.append('future_evolve', data.future_evolve);
        dataPokemon.append('cp_40', data.cp_40);
        dataPokemon.append('cp_39', data.cp_39);

        if (data.img_name) {
          dataPokemon.append('img_name', data.img_name);
        }

        await api.post('/pokemon', dataPokemon);

        toast.success('Pokemon cadastrado com sucesso');

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Link className="btn-back" to="/">
          Voltar
        </Link>
        <h1>Novo Pokémon</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <AvatarInput>
            <label htmlFor="avatar">
              <FiCamera />
              <InputFile type="file" name="img_name" id="avatar" />
            </label>
          </AvatarInput>
          <Input name="name" placeholder="Name" />

          <Input name="pokedex_number" placeholder="Pokedex Number" />

          <Input name="generation" placeholder="Generation" />

          <Input name="evolution_stage" placeholder="Evolution Stage" />

          <Input name="evolved" placeholder="Evolved" />

          <Input name="family_id" placeholder="Family ID" />

          <Input name="cross_gen" placeholder="Cross Gen" />

          <Input name="type_1" placeholder="Type 1" />
          <Input name="type_2" placeholder="Type 2" />

          <Input name="weather_1" placeholder="Weather 1" />

          <Input name="weather_2" placeholder="Weather 2" />

          <Input name="stat_total" placeholder="Stat Total" />

          <Input name="atk" placeholder="ATK" />
          <Input name="def" placeholder="DEF" />
          <Input name="sta" placeholder="STA" />

          <Input name="legendary" placeholder="Legendary" />

          <Input name="aquireable" placeholder="Aquireable" />
          <Input name="spawns" placeholder="Spawns" />
          <Input name="regional" placeholder="Regional" />

          <Input name="raidable" placeholder="Raidable" />

          <Input name="hatchable" placeholder="Hatchable" />
          <Input name="shiny" placeholder="Shiny" />
          <Input name="nest" placeholder="Nest" />

          <Input name="new" placeholder="New" />

          <Input name="not_gettable" placeholder="Not Gettable" />
          <Input name="future_evolve" placeholder="Future Evolve" />
          <Input name="cp_39" placeholder="100% CP @ 39" />
          <Input name="cp_40" placeholder="100% CP @ 40" />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default PokemonRegister;
