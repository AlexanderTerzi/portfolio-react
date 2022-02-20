import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Works = styled(NavLink)`
  color: ${(props) => (props.clickSpinner ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.clickSpinner ? "0 0 4px #000" : "none")};
  }
`;

const WorksLink = ({ clickSpinner, setPath }) => {
    return (
        <Works clickSpinner={+clickSpinner} to="/works">
            <motion.h2
                onClick={() => setPath("works")}
                initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                My Works
            </motion.h2>
        </Works>
    );
};

export default WorksLink;