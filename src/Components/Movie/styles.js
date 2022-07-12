import styled from "styled-components";
import Slider from "react-slick";
import { mobile } from "../../Constants/breakpoints";

export const Container = styled.div`
  margin-top: 50px;
  width: 89.2vw;
  display: flex;
  flex-direction: column;
  height: 200px;
  img {
    &:hover {
      box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
        rgb(0 0 0/ 72%) 0 30px 22px -10px;
    }
    width: 16.2vw;
    height: 18.4vh;
    object-fit: cover;
    border-radius: 4px;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0/ 69%) 0 26px 30px -10px,
      rgb(0 0 0/ 73%) 0 16px 10px -10px;
    cursor: pointer;
    :hover {
      border: 4px solid white;
    }
  }

  button {
    z-index: 2;
  }
  h4 {
    font-family: Avenir-World-for-Disney-Demi, sans-serif;
    font-size: 20px;
    color: rgb(249, 249, 249);
    height: 28px;
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
  color: rgb(249, 249, 249);

  @media (max-width: ${mobile}) {
    margin-top: 80px;
    img {
      width: 95%;
      min-width: 100px;
      min-height: 150px;
    }
  }
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

export const Carousel = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    font-size: 40px;
    line-height: 1;
    opacity: 0;
    color: #fff;
    z-index: 4;
  }
  :hover {
    .slick-next:before,
    .slick-prev:before {
      opacity: 0.75;
    }
  }
`;

export const Wrap = styled.div`
  height: 177px;
  display: flex;
  width: 316px;
  img {
    width: 316px;
  }
`;
