import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";

const Contact = styled.a`
  color: ${(props) => (props.clickSpinner ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Title = styled(motion.h3)`
    display: flex;
    align-items: center;

    svg {
        margin-right: 7px;
    }
`;

const ContactLink = ({ mq, clickSpinner }) => {
    return (
        <>
            {mq ? (
                <Contact
                    clickSpinner={+clickSpinner}
                    target="_blank"
                    href="mailto:sanyagts@gmail.com"
                >
                    <Title
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
                        <MdEmail /> Say hi..
                    </Title>
                </Contact>
            ) : (
                <Contact
                    clickSpinner={+false}
                    target="_blank"
                    href="mailto:sanyagts@gmail.com"
                >
                    <Title
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
                        <MdEmail />Say hi..
                    </Title>
                </Contact>
            )}
        </>
    );
};

export default ContactLink;