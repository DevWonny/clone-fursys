import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/mainVideo.mp4";

const Video = () => {
  return (
    <Wrap>
      <Translucent />
      <video autoPlay={true} muted={true} loop={true} width="100%">
        <source src={MainVideo} type="video/mp4" />
      </video>

      <MainTextWrap>
        <div>
          <span>하이브리드 위크</span>의시작
        </div>
        <div>일하는 공간에도</div>
        <div>
          <span>새로운 기준</span>이 필요하다.
        </div>
      </MainTextWrap>
    </Wrap>
  );
};

export default Video;

const Wrap = styled.div`
  width: 100%;
  height: 102vh;
  background: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Translucent = styled.div`
  width: 100%;
  height: 102vh;
  background: #2e2e2e;
  opacity: 0.5;
  position: absolute;
`;

const MainTextWrap = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9;

  & div {
    text-align: center;
    font-size: 4rem;
    font-weight: 900;
    color: #fff;

    & span {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
    }
  }
`;
