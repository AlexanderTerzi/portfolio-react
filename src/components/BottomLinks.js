import React, { useContext } from 'react';
import { AppContext } from '../App';
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.clickSpinner ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const BottomLinks = () => {

    const { clickSpinner, mq, setPath, setClickSpinner } = useContext(AppContext);

    return (
        <BottomBar>
            <About
                onClick={() => setClickSpinner(false)}
                clickSpinner={mq ? +false : +clickSpinner}
                to={process.env.PUBLIC_URL + '/about'}
            >
                <motion.h2
                    onClick={() => setPath("about")}
                    initial={{
                        y: 200,
                        transition: { type: "spring", duration: 1.5, delay: 0.2 },
                    }}
                    animate={{
                        y: 0,
                        transition: { type: "spring", duration: 1.5, delay: 0.2 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    About.
                </motion.h2>
            </About>
            <Skills to={process.env.PUBLIC_URL + '/skills'}>
                <motion.h2
                    onClick={() => setPath("skills")}
                    initial={{
                        y: 200,
                        transition: { type: "spring", duration: 1.5, delay: 0.2 },
                    }}
                    animate={{
                        y: 0,
                        transition: { type: "spring", duration: 1.5, delay: 0.2 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    My Skills.
                </motion.h2>
            </Skills>
        </BottomBar >
    );
};

export default BottomLinks;