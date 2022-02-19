import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import styled from "styled-components";
import { motion } from "framer-motion";

import { DarkTheme, mediaQueries } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  svg {
     transition: all 0.5s ease;
      color: inherit;

     &:hover {
      transform: scale(1.4);
    }
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;

  ${mediaQueries(20)`
    margin: 0.3rem 0;
  `};
  }
  

  ${mediaQueries(40)`
  left: 1rem;
      svg{
        width:20px;
        height:20px
      }
  `};
  
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {

  const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a href='https://github.com/AlexanderTerzi'
          rel="noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
        >
          <AiFillGithub
            size={25}
            fill={props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a href='https://www.facebook.com/akeksandr.terzi'
          rel="noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
        >
          <FaFacebook
            size={25}
            fill={props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a href='https://www.instagram.com/terzi_alexandr/'
          rel="noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
        >
          <AiFillInstagram
            size={25}
            fill={props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a href='https://www.linkedin.com/in/alexander-terzi-666017227'
          rel="noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
        >
          <AiFillLinkedin
            size={25}
            fill={props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`}
          />
        </a>
      </motion.div>

      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
