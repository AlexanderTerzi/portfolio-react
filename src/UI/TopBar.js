import styled from "styled-components";
import Logo from "./Logo";
import HomeButton from "./HomeButton";

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  z-index: 10;
  background: inherit;
`;
const TopBar = () => {
  return (
    <Box>
      <Logo />
      <HomeButton />
    </Box>
  );
};

export default TopBar;
