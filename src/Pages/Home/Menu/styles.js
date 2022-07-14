import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  color: white;
  background-color: #1a1d29;
  justify-content: space-evenly;

  img {
    height: 40px;
    object-fit: cover;
    width: 40px;
    object-fit: cover;
  }
`;
