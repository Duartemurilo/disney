import styled from "styled-components";
import Slider from "react-slick";
import { mobile } from "../../../Constants/breakpoints";

export const Carousel = styled(Slider)`
  margin-top: 105px;
  width: 92%;
  position: relative;
  .slick-next:before,
  .slick-prev:before {
    font-size: 40px;
    line-height: 1;
    opacity: 0;
    color: #fff;
  }
  ul li button {
    &::before {
      font-size: 12px;
      color: rgb(150, 158, 171, 0.81);
    }
  }

  button {
    z-index: 2;
  }
  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  :hover {
    .slick-next:before,
    .slick-prev:before {
      opacity: 0.75;
    }
  }

  @media (max-width: ${mobile}) {
    ul li button {
      display: none;
      opacity: 0;
    }
  }
`;

export const Wrap = styled.div`
  height: 41vh;
  width: 89.2vw;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    transition-duration: 300ms;
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: rgb(0 0 0/ 69%) 0 26px 30px -10px,
      rgb(0 0 0/ 73%) 0 16px 10px -10px;
    cursor: pointer;
    :hover {
      border: 4px solid white;
    }
  }

  @media (max-width: ${mobile}) {
    min-height: 210px;
    width: 100%;
    height: 30vh;
    img {
      object-fit: cover;
    }
  }
`;
