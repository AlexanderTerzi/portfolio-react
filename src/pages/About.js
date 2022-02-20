import React from "react";
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { DarkTheme, mediaQueries } from '../components/Themes'
import astronaut from "../assets/images/spaceman.png";
import Loading from '../UI/Loading';

const SocialIcons = lazy(() => import('../UI/SocialIcons'))
const HomeButton = lazy(() => import('../UI/HomeButton'))
const Logo = lazy(() => import('../UI/Logo'));
const ParticlesComponent = lazy(() => import('../UI/ParticlesComponent'));
const BigTitle = lazy(() => import('../UI/BigTitle'));

const Wrapper = styled(motion.div)`
  background: rgb(0,0,0);
  background: linear-gradient(119deg, rgba(0,0,0,1) 0%, rgba(25,25,56,1) 56%);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
    0% { transform: translateY(-10px)}
    50% { transform: translateY(15px) translateX(15px)}
    100% { transform: translateY(-10px)}
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  width:20vw;

  img{
    width:100%;
    height:auto;
  }
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 14px;
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  p:not(:last-child){
    margin-bottom: 15px;
  }

  a {
    color: inherit;
  }

  ${mediaQueries(40)`
      width: 60vw;
      height: 50vh;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
  `};
  ${mediaQueries(30)`
      width: 50vw;
      height: auto;
      backdrop-filter: none;
      margin-top:2rem;
  `};

${mediaQueries(20)`
      padding: 1rem;
      font-size: calc(0.5rem + 1vw);
  `};
`
const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Wrapper
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <Logo theme='dark' />
          <HomeButton />
          <SocialIcons theme='dark' />
          <ParticlesComponent theme='dark' />
          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}>
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            <p>
              Hello! My name is Alexander Terzi. I am from Odessa, and I have been a Front-End developer since 2018.
            </p>
            <p>
              EDUCATION:<br />
              September 2003 – June 2008 Odessa National Polytechnic University, Power Engineering Institute, specialty - Nuclear power engineering, specialization - coolant technology and radioactive waste management at nuclear power plants.
            </p>
            <p>
              COURSES  AND  CERTIFICATES: <br />
              October 2018 courses “Web-developer: freelancer code” in <a href="https://wayup.in" target="_blank" rel="noreferrer">WayUp</a> Odessa.<br />
              January 2021 courses “Javascript” in <a href="https://itgid.info/certificate/view?Certificate%5Buid%5D=jbm73jz5cz" target="_blank" rel="noreferrer">ItGid</a>.<br />
              December 2021 courses “React JS” in <a href="https://itgid.info/certificate/view?Certificate%5Buid%5D=wvp41kzndn" target="_blank" rel="noreferrer">ItGid</a>.<br />

            </p>
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Wrapper>
      </Suspense>
    </ThemeProvider>
  )
}

export default About;