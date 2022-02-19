import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "../components/Themes";

import { MdDeveloperMode } from 'react-icons/md';
import Loading from "../UI/Loading";

const SocialIcons = lazy(() => import("../UI/SocialIcons"));
const HomeButton = lazy(() => import("../UI/HomeButton"));
const Logo = lazy(() => import("../UI/Logo"));
const ParticlesComponent = lazy(() => import("../UI/ParticlesComponent"));

const BigTitle = lazy(() => import("../UI/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction:column;  
    padding:8rem 0;
    height:auto;

    &>*:nth-child(5){
      margin-bottom:5rem;
    }   
  `};

  ${mediaQueries(30)`
    &>*:nth-child(5){
      margin-bottom:4rem;
    }   
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);

    svg{
      width:30px;
      height:30px;
   }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Logo theme="light" />
          <HomeButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main>
            <Title>
              <MdDeveloperMode size={40} /> Frontend Developer
            </Title>
            <Description>
              <strong>Skills</strong> <br />
              <p>
                HTML5, CSS3, Sass/SCSS, JavaScript, JQuery, React JS, REST API, Gulp 4, Bootstrap, GIT, WordPress, BEM methodology etc.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong> <br />
              <p>
                VS Code, WebStorm, Figma, Adobe Photoshop, XD, Avocode etc.
              </p>
            </Description>
            <Description>
              Responsive, crossbrowser, valid, pixel perfect coding
            </Description>
          </Main>
          <BigTitle text="Skills" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default Skills;
