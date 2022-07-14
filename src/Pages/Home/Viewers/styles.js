import styled from "styled-components";
import { mobile } from "../../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  min-width: 89vw;
  box-sizing: border-box;
  margin-top: 50px;
  width: auto;
  height: auto;
  min-height: 18vh;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    width: auto;
    height: auto;
    min-height: auto;
    gap: 1vw;
    margin-top: 4vh;
  }
`;

export const Card = styled.div`
  width: 20%;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  height: 100%;
  box-shadow: rgb(0 0 0/ 69%) 0 26px 30px -10px,
    rgb(0 0 0/ 73%) 0 16px 10px -10px;
  cursor: pointer;
  width: 17vw;
  position: relative;
  transition: opacity 500ms ease-in-out 0s;
  .image {
    width: 100%;
    height: 100%;
  }
  .video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    border-radius: inherit;
  }
  :hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);

    .video {
      opacity: 1;
    }
  }

  @media (max-width: ${mobile}) {
  }
`;
