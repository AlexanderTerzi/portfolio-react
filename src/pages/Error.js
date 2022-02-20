import React from 'react';
import styled from 'styled-components';
import HomeButton from '../UI/HomeButton';
import BigTitle from '../UI/BigTitle';

import { HiOutlineEmojiSad } from 'react-icons/hi';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: rgb(112,107,255);
    background: radial-gradient(circle, rgba(112,107,255,1) 0%, rgba(163,255,193,1) 100%);
    display: flex;
    justify-content: center;
     align-items: center;
`;

const Text = styled.div`
    color: #000;
    font-size: calc(2rem + 2vw);
    width: 55vw;
    text-align: center;

    span {
        svg {
            margin-left: 10px;
            transform: translateY(9px);
        }
    }
`;

const Error = () => {
    return (
        <Wrapper>
            <HomeButton />
            <Text>
                Oops! <br />
                <span>
                    something went wrong <HiOutlineEmojiSad />
                </span>
            </Text>
            <BigTitle text="404" top="20%" right="30%" />
        </Wrapper>
    );
};

export default Error;