import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(30,30,31);
  background: linear-gradient(90deg, rgba(30,30,31,1) 0%, rgba(65,63,66,1) 50%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  );
};

export default Loading;
