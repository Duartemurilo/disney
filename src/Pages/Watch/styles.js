import styled from "styled-components";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1b1d29;
  overflow-x: hidden;
  height: 100vh;
  min-height: 100vh;
  padding-bottom: 40px;
  #movie {
    margin-left: 90px;
  }
  @media (max-width: ${mobile}) {
    height: auto;
    align-items: center;
    #movie {
      margin-left: 0px;
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background-repeat: no-repeat;
  @media (max-width: ${mobile}) {
    height: 80vh;
    width: 100%;
  }
`;

export const Gradiente = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgb(26, 29, 41, 0.98) 2%,
    transparent 100%
  );
  z-index: 1;
  @media (max-width: ${mobile}) {
    width: 100%;
  }
`;
export const GradienteLeft = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(
    to right,
    rgb(26, 29, 41, 0.96) 20%,
    transparent 45%
  );
  padding-left: 90px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0px;
    background: none;
  }
`;

export const Main = styled.div`
  margin-top: 150px;
  height: auto;
  margin-bottom: 5px;
  @media (max-width: ${mobile}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`;

export const Section = styled.div`
  height: 160px;
  width: 40%;
  display: flex;
  align-items: center;
  h4 {
    color: white;
    margin: 0;
    font-size: 3.5rem;
  }
  @media (max-width: ${mobile}) {
    width: 100%;
    margin-top: 40vh;
    display: flex;
    justify-content: center;
    h4 {
      font-size: 28px;
      max-width: 320px;
    }
  }
`;

export const CardInfo = styled.div`
  height: auto;
  max-height: 360px;
  min-width: 874px;
  width: 47.29vw;
  padding-bottom: 0px;
  @media (max-width: ${mobile}) {
    width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
  }
`;

export const InfoContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: white;
  font-size: 15px;
  p {
    margin: 0;
  }
  span {
    display: flex;
    gap: 10px;
  }
  img {
    width: 30px;
    height: 20px;
  }
  #livre {
    width: 20px;
    object-fit: contain;
  }
  #tagline {
    font-size: 12px;
    color: #f9f9f9;
    font-weight: 300;
    margin: 0;
  }

  @media (max-width: ${mobile}) {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    #tagline {
      font-size: 15px;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 65px;
  width: 100%;
  margin-top: 20px;
  button {
    cursor: pointer;
  }
  @media (max-width: ${mobile}) {
    display: flex;
    justify-content: center;
  }
`;

export const BtnPlay = styled.button`
  background-color: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: Avenir-World-for-Disney-Demi, sans-serif;
  }
  color: rgb(14, 11, 20);
  height: 56px;
  width: 166.625px;
  padding: 0px 24px;
  transition: all 0.2s ease-in-out 0s;
  border-radius: 4px;
  border: none;
  :hover {
    background-color: #a3a5a9;
  }
  @media (max-width: ${mobile}) {
    width: 80%;
    max-width: 350px;
    height: 45px;
  }
`;

export const BtnTrailer = styled.button`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: Avenir-World-for-Disney-Demi, sans-serif;
    color: white;
  }

  height: 56px;
  width: 120px;
  padding: 0px 24px;
  transition: all 0.2s ease-in-out 0s;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  :hover {
    background-color: #a3a5a9;
  }
  @media (max-width: ${mobile}) {
    display: none;
  }
`;

export const BtnAdd = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23F9F9F9' d='M22.635 16.635h-3.27v-3.27a1.365 1.365 0 0 0-2.73 0v3.27h-3.27a1.365 1.365 0 0 0 0 2.73h3.27v3.27a1.365 1.365 0 0 0 2.73 0v-3.27h3.27a1.365 1.365 0 1 0 0-2.73z'/%3E%3C/svg%3E");
  height: 40px;
  width: 40px;
  padding: 22px;
  border-radius: 50%;
  border: 2px solid #f9f9f9;
  @media (max-width: ${mobile}) {
    display: none;
  }
`;

export const Description = styled.div`
  font-family: Avenir-World-for-Disney-Regular, sans-serif;
  font-size: 19px;
  color: rgb(249, 249, 249);
  height: auto;
  min-height: 300px;
  width: 874px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  line-height: 32px;
  @media (max-width: ${mobile}) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 15px;

    display: none;
  }
`;

export const NavContainer = styled.div`
  height: 55px;
  width: 87.5vw;
  margin-left: 90px;
  box-sizing: border-box;
  margin-top: 20px;
  padding-bottom: 5px;
  margin-bottom: -20px;
  gap: 45px;
  display: flex;
  .nav {
    cursor: pointer;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin: 0;
      text-transform: uppercase;
      font-weight: 600;
      color: rgb(202, 202, 202, 0.8);
      cursor: pointer;
    }
    .botton {
      width: 100%;
      background-color: white;
      height: 1px;
      opacity: 0;
    }

    :hover {
      .botton {
        opacity: 1;
      }
      p {
        color: white;
      }
    }
  }
  @media (max-width: ${mobile}) {
    margin: 0;
    margin-top: 35px;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    padding: 0;
    height: auto;
    padding-bottom: 0px;
    gap: 0px;
    border: none;
    justify-content: space-between;
    .nav {
      p {
        font-size: 14px;
        margin: auto;
      }

      padding: 0;
      p {
        margin: 0;
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 850px) {
      .nav {
        font-size: 20px;
      }
    }
  }
`;

export const WrapRecomends = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  gap: 8px;
  img {
    width: 140px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #1a1d29;
`;
