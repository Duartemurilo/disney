import styled from "styled-components";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  font-weight: 400;
  line-height: 18.4px;
  background-color: rgb(14, 11, 20);
  height: 300px;
  width: 1833px;
  margin: 100px 0px 0px;
  gap: 1vh;
  padding-bottom: 40px;
  padding-top: 40px;
  .card-icon {
    display: flex;
    justify-content: space-between;
    width: 10%;
    color: white;
    margin-top: 4vh;
  }
  .icon-footer {
    font-size: 1.5rem;
    transition: 0.5s;
    color: white;
  }
  img {
    height: 48px;
    width: 94px;
  }
  @media (max-width: ${mobile}) {
    width: 90%;
    height: auto;
    background-color: transparent;
    .card-icon {
      margin-top: 8vh;
      min-width: 150px;
    }
  }
`;

export const CardText = styled.div`
  width: 30%;
  height: 60%;
  max-width: 500px;
  max-height: 154px;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    p {
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      margin: 0;
      color: #cacaca;
      :hover {
        color: white;
      }
    }
  }

  @media (max-width: ${mobile}) {
    width: 100%;
    height: auto;
    div {
      height: auto;
    }
  }
`;
