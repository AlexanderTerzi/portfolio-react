import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import HomeButton from "./HomeButton";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  z-index: 10;
  background: inherit;
`;
const TopBar = () => {
  return (
    <Wrapper>
      <Logo />
      <HomeButton />
    </Wrapper>
  );
};

export default TopBar;