import styled from "styled-components";

export const ButtonStyled = styled.button`
  transition: 0.3s;
  box-sizing: border-box;
  margin: 10px;
  border: 2px solid transparent;
  padding: 10px 20px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: white;

  :hover {
    transition: 0.3s;
    box-sizing: border-box;
    background-color: white;
    color: rebeccapurple;
    border: 2px solid rebeccapurple;
    cursor: pointer;
  }
`;
