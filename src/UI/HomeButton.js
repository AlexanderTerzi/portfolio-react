import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQueries } from "../components/Themes";

import { FaHome } from "react-icons/fa";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
      background-color: #fff;
      transform:translateX(-50%) scale(1.05);
      box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
    width: 2rem;
    height: 2rem;

    svg{
      width:20px;
      height:20px;
    }
  `};
`;

const HomeButton = () => {
  return (
    <Power>
      <NavLink to={process.env.PUBLIC_URL + '/'}>
        <FaHome size={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default HomeButton;