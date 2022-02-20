import React from "react";
import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import music from "../assets/audio/audio.mp3";
import { mediaQueries } from "../components/Themes";

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 14rem;
  top: 3rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.5s;
  }

  ${mediaQueries(40)`
      left:1rem;
      top:10rem;
  `};
`;

const play = keyframes`
  0%{
      transform:scaleY(1);
  }
  50%{
      transform:scaleY(2);
  }
  100%{
      transform:scaleY(1);
  }
`;

const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.clickAudio ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;

  ${mediaQueries(40)`
      height:0.5rem;
      width:1px;
  `};
`;

const SoundBar = () => {

  const [clickAudio, setClickAudio] = useState(false);

  const handleClickAudio = () => {
    setClickAudio(!clickAudio);
    if (!clickAudio) {
      refAudio.current.play();
    } else {
      refAudio.current.pause();
    }
  };

  const refAudio = useRef(null);

  return (
    <Wrapper onClick={handleClickAudio}>
      <Line clickAudio={clickAudio} />
      <Line clickAudio={clickAudio} />
      <Line clickAudio={clickAudio} />
      <Line clickAudio={clickAudio} />
      <Line clickAudio={clickAudio} />
      <audio src={music} ref={refAudio} loop />
    </Wrapper>
  );
};

export default SoundBar;