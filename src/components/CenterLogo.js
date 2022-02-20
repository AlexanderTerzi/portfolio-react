import React, { useContext } from 'react';
import { AppContext } from '../App';
import styled, { keyframes } from "styled-components";

import { FaConnectdevelop } from "react-icons/fa";
import { FaLongArrowAltUp } from 'react-icons/fa';

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.clickSpinner ? "85%" : "50%")};
  left: ${(props) => (props.clickSpinner ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > *:last-child {
    display: ${(props) => (props.clickSpinner ? "none" : "flex")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.clickSpinner ? "90%" : "50%")};
    left: ${(props) => (props.clickSpinner ? "90%" : "50%")};
    width: ${(props) => (props.clickSpinner ? "80px" : "150px")};
    height: ${(props) => (props.clickSpinner ? "80px" : "150px")};
  }

  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.clickSpinner ? "40px" : "150px")};
    height: ${(props) => (props.clickSpinner ? "40px" : "150px")};
  }
`;

const pulse = keyframes`
  0% { transform: translateY(-2px)}
  50% { transform: translateY(2px)}
  100% { transform: translateY(-2px)}
`;

const Click = styled.span`
  align-items: center;
  span {
    margin: 7px;
  }
  svg {
    animation: ${pulse} infinite 1s ease;
  }
`;

const CenterLogo = () => {

  const { clickSpinner, handleClick, mq } = useContext(AppContext);

  return (
    <Center clickSpinner={clickSpinner}>
      {mq ? (
        <FaConnectdevelop
          onClick={handleClick}
          size={clickSpinner ? 80 : 150}
          fill="currentColor"
        />
      ) : (
        <FaConnectdevelop
          onClick={handleClick}
          size={clickSpinner ? 120 : 200}
          fill="currentColor"
        />
      )}
      <Click>
        <span>click here</span><FaLongArrowAltUp />
      </Click>
    </Center>
  );
};

export default CenterLogo;