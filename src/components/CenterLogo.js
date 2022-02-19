import React from 'react';
import styled, { keyframes } from "styled-components";

import { FaConnectdevelop } from "react-icons/fa";

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
    display: ${(props) => (props.clickSpinner ? "none" : "inline-block")};
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

const CenterLogo = ({ clickSpinner, handleClick, mq }) => {

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
            <span>click here</span>
        </Center>
    );
};

export default CenterLogo;