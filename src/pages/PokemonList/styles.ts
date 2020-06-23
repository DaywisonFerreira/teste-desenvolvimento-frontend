import styled from 'styled-components';

interface PaginationItemProps {
  isSelect?: boolean;
}

export const Container = styled.div`
  height: 100%;
  background: #fff;
  color: black;
  padding: 10px 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  > h3 {
    font-size: 26px;
    color: #919191;
    text-align: center;
    margin-top: 10px;
  }
`;

export const ActionsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    border: 1px solid #30a7d7;
    border-radius: 2px;
    padding: 0 10px;
    background: #30a7d7;
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #919191;
  }

  input {
    height: 40px;
    border-radius: 5px;
    padding: 0 2px;
  }
`;

export const LimitContent = styled.div`
  span {
    color: #919191;
    margin-right: 5px;
  }

  select {
    padding: 5px;
    border: 1px solid #30a7d7;
    color: #fff;
    background: #30a7d7;
  }
`;

export const PokemonsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const PokemonDetail = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;

  .pokemon-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 170px;
    height: 153px;
  }

  h3 {
    text-align: center;
  }

  span {
    color: #30a7d7;
  }
`;

export const PokemonInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #737373;
  font-weight: bold;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export const Pagination = styled.div`
  margin-top: 30px;
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  cursor: pointer;
  padding: 0 2px;

  ${(props) =>
    props.isSelect && {
      background: '#30a7d7',
    }}
`;
