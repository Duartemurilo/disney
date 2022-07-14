import styled from "styled-components";
import { SlideLeft } from "../../Animations/Animations";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  background-color: #040714;
  height: 72px;
  width: 100%;
  position: absolute;
  top: 0px;
  #link {
    text-decoration: none;
  }
  @media (max-width: ${mobile}) {
    justify-content: center;
    height: 70px;
    padding-top: 25px;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin-left: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  #arrow-back {
    display: none;
  }
  img {
    width: 80px;
    height: 48px;
  }
  @media (max-width: ${mobile}) {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    align-items: center;

    margin: 0;
    img {
      width: 100px;
      height: 100%;
    }
    #arrow-back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      left: 30px;
      bottom: 0;
    }
  }
`;

export const CardNav = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 127px;
  min-width: 127px;
  color: white;
  cursor: pointer;
  :hover {
    .border {
      opacity: 1;
      animation: ${SlideLeft} ease 0.3s;
    }
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1.5;
    font-family: Avenir-World-for-Disney-Demi, sans-serif;
    margin: 0;
    margin-left: 8px;
    color: #f9f9f9;
    gap: 2px;
    height: 40%;
    .border {
      width: 100%;
      height: 1px;
      background-color: white;
      opacity: 0;
    }
  }
  @media (max-width: ${mobile}) {
    display: none;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 250px;
  cursor: pointer;

  p {
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 16px;
    color: white;
    font-size: 13px;
    z-index: 2;
  }
  img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    object-fit: contain;
    cursor: pointer;
    z-index: 2;
  }

  @media (max-width: 1150px) {
    width: 100px;
    margin-right: 70px;
    justify-content: flex-end;
    p {
      display: none;
    }
  }

  @media (max-width: ${mobile}) {
    display: none;
  }
`;
