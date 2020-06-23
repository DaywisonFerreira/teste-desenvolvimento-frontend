import styled from 'styled-components';

export const PokemonContent = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f2f2f2;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.2s;
  height: 223px;

  h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  &:hover {
    border-color: #30a7d7;
  }
`;

export const BoxActionAvatar = styled.div`
  display: flex;
  position: relative;

  img {
    width: 170px;
    height: 153px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -10px;

  button {
    border: 1px solid #ccc;
    background: #fff;
    padding: 2px;
    border-radius: 4px;
  }

  button + button {
    margin-top: 10px;
  }

  button:nth-child(1) svg {
    color: #8a2be2;
  }

  button:nth-child(2) svg {
    color: #0000ff;
  }

  button:nth-child(3) svg {
    color: #dc143c;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: space-between;
`;
