import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  a {
    position: absolute;
    top: 50px;
    left: 220px;
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

  form {
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    button {
      background: #30a7d7;
      color: #fff;
      border: 0;
      padding: 5px;
      border-radius: 5px;
      grid-column: 4;
      margin-top: 30px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const AvatarInput = styled.div`
  grid-row-start: 1;
  grid-row-end: 5;
  border: 1px solid #ccc;
  position: relative;
  align-self: center;
  height: 214px;
  width: 214px;
  border-radius: 107px;

  img {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;
