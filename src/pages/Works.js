import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";

import { FaConnectdevelop } from "react-icons/fa";
import { portfolio } from "../data/PortfolioData";
import { DarkTheme, mediaQueries } from "../components/Themes";

import Card from "../UI/Card";
import Loading from "../UI/Loading";

const SocialIcons = lazy(() => import("../UI/SocialIcons"));
const HomeButton = lazy(() => import("../UI/HomeButton"));
const Logo = lazy(() => import("../UI/Logo"));
const BigTitle = lazy(() => import("../UI/BigTitle"));

const Wrapper = styled(motion.div)`
  background: rgb(30,30,31);
  background: linear-gradient(90deg, rgba(30,30,31,1) 0%, rgba(153,18,221,1) 50%);
  position: relative;
  display: flex;
  height: 400vh;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  ${mediaQueries(50)`
      left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
      top: 30%;
      left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`
      left:calc(2rem + 15vw);
  `};

  ${mediaQueries(25)`
      left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;

  z-index: 1;
  ${mediaQueries(40)`
      width:60px;
      height:60px;  

      svg{
        width:60px;
        height:60px;
      }
  `};

  ${mediaQueries(25)`
      width:50px;
      height:50px;

      svg{
        width:50px;
        height:50px;
      }
  `};
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Works = () => {

  const mainRef = useRef(null);
  const rotateRef = useRef(null);

  useEffect(() => {

    let element = mainRef.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (rotateRef.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Wrapper
          key="works"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Logo theme="dark" />
          <HomeButton />
          <SocialIcons theme="dark" />
          <Main ref={mainRef} variants={container} initial="hidden" animate="show">
            {portfolio.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <BigTitle text="WORKS" top="10%" right="20%" />
          <Rotate ref={rotateRef}>
            <FaConnectdevelop size={80} fill={DarkTheme.text} />
          </Rotate>
        </Wrapper>
      </Suspense>
    </ThemeProvider>
  );
};

export default Works;