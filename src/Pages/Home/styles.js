import styled from "styled-components";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  background-color: #040714;
  height: auto;
  position: relative;
  @media (max-width: ${mobile}) {
    padding-bottom: 50px;
  }
`;
