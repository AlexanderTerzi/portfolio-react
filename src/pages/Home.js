import React, { useContext } from "react";
import styled from "styled-components";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ParticlesComponentMain } from "../UI/ParticlesComponent";

import Intro from "../components/Intro";
import Loading from "../UI/Loading";
import { mediaQueries } from "../components/Themes";
import CenterLogo from "../components/CenterLogo";
import ContactLink from "../components/ContactLink";
import Social from "../components/Social";
import WorksLink from '../components/WorksLink';
import BottomLinks from "../components/BottomLinks";
import { AppContext } from "../App";

const HomeButton = lazy(() => import("../UI/HomeButton"));
const Logo = lazy(() => import("../UI/Logo"));

const Wrapper = styled(motion.div)`
  background: rgb(82,255,166);
  background: linear-gradient(90deg, rgba(82,255,166,0.7567401960784313) 0%, rgba(100,163,189,0.5550595238095238) 50%);
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
  `};

    ${mediaQueries(30)`
      font-size:1em;
  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const DarkBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.clickSpinner ? "50%" : "0%")};
  background: rgb(30,30,31);
  background: linear-gradient(90deg, rgba(30,30,31,1) 0%, rgba(65,63,66,1) 50%);
  height: ${(props) => (props.clickSpinner ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.clickSpinner
      ? mediaQueries(50)`
        height: 50%;
        right:0;
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;`
      : mediaQueries(50)`
        height: 0;
        width: 0;
  `};
`;

const Home = () => {

  const { clickSpinner, path } = useContext(AppContext);

  const moveY = {
    y: "-100%",
  };

  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };

  return (
    <Suspense fallback={<Loading />}>
      <Wrapper
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <ParticlesComponentMain />
        <DarkBlock clickSpinner={clickSpinner} />
        <Container>
          <Logo theme={clickSpinner ? "dark" : "light"} />
          <HomeButton />
          <Social />
          <CenterLogo />
          <ContactLink />
          <WorksLink />
          <BottomLinks />
        </Container>
        {clickSpinner ? <Intro clickSpinner={clickSpinner} /> : null}
      </Wrapper>
    </Suspense>
  );
};

export default Home;