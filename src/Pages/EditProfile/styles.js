import styled from "styled-components";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100vh;
  background-color: #1a1d29;
  flex-direction: column;
  overflow-x: hidden;
  h2 {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.11px;
    line-height: 38.4px;
    height: 62px;
    color: white;
    margin-bottom: 0;
  }
  h4 {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.11px;
    line-height: 28px;
    color: rgb(202, 202, 202);
    height: 28px;
    margin-top: 0;
  }

  @media (max-width: ${mobile}) {
    h2 {
      margin-top: 100px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  position: absolute;
  background-color: #1a1d29;
  top: 0;
  align-items: center;
  padding: 0 40px;
  #link {
    text-decoration: none;
  }
  img {
    height: 48px;
    width: 80px;
  }
  button {
    height: 48px;
    color: white;
    border: none;
    font-family: Avenir-World-for-Disney-Demi, sans-serif;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    background-color: #0082f0;
    cursor: pointer;
    border-radius: 4px;
    width: 120px;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  font-size: 16px;
  height: 486px;
  width: 880px;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 80px;
  @media (max-width: ${mobile}) {
    width: 80%;
    flex-direction: row;
    height: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    flex-wrap: wrap;
  }
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 16px;
  height: 228px;
  width: 170px;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 140px;
    width: 140px;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transition: 0.2s ease;
    cursor: pointer;
    :hover {
      border: 4px solid white;
      transform: scale(1.04);
    }
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 900;
    color: rgb(249, 249, 249);
    height: 28.7969px;
  }

  @media (max-width: ${mobile}) {
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const SectionAdd = styled(Section)`
  justify-content: center;
  span {
    background-color: #1a1d29;
    border-radius: 50%;
    background-color: rgba(249, 249, 249, 0.1);
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    :hover {
      background-color: #73747c;
      border: 4px solid white;
      transform: scale(1.04);
    }
  }
  img {
    :hover {
      border: none;
      transform: scale(1);
    }
    width: 60px;
    height: 60px;
    position: absolute;
    left: auto;
    right: auto;
  }
  @media (max-width: ${mobile}) {
    width: 100%;
  }
`;
