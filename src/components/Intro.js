import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { mediaQueries } from "./Themes";
import { FaFileDownload } from 'react-icons/fa';
import Me from "../assets/images/Avatar.png";
import CV from '../assets/files/CV_Alexander_Terzi.pdf';

const Wrapper = styled(motion.div)`
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  border-radius: 14px;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;
    flex-direction:column;
    justify-content:space-between;
  `};

  ${mediaQueries(40)`
    width: 60vw;
  `};

  ${mediaQueries(30)`
    width: 70vw;
  `};
  ${mediaQueries(20)`
    width: 60vw;
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const Content = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;
  .avatar {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  ${mediaQueries(50)`
      width: 100%;
      height: 50%;

      .avatar {
        width: 70%;
      }
  `};

  ${mediaQueries(40)`
      .avatar {
        width: 80%;
      }
  `};

  ${mediaQueries(30)`
      .avatar {
        width: 90%;
      }
  `};
  ${mediaQueries(20)`
     .avatar {
       width: 80%;
    }
 `};
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;

    ${mediaQueries(40)`
        font-size: calc(0.5rem + 1vw);
  `};
  }

  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
  `};
  ${mediaQueries(20)`
         padding: 1rem;
  `};
`;

const CVLink = styled.a`
    font-size: 16px !important;
    cursor: pointer;
    width: 10rem;
    margin-top:17px;
    background: #52ffa6;
    color: ${props => props.theme.text} !important;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.5s ease;
    padding: 0.5em;
    border-radius: 4px;
    
    svg {
      transition: all 0.5s ease;
    }

    &:hover {
        transform: scale(1.05);
        svg {
          transform: rotate(360deg)
        }
    }

    span {
        margin-left: 7px;
    }
`;

const Intro = () => {

  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);

  return (
    <Wrapper
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <Content>
        <Text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', duration: 2, delay: 1 }}>
          <h1>Hi,</h1>
          <h3>I'm Alexander Terzi.</h3>
          <h6>I Front-end Developer since 2018.</h6>
          <CVLink href={CV} download>
            <FaFileDownload />
            <span>
              Download my CV
            </span>
          </CVLink>
        </Text>
      </Content>
      <Content>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} >
          <img className="avatar" src={Me} alt="Me" />
        </motion.div>
      </Content>
    </Wrapper>
  );
};

export default Intro;
