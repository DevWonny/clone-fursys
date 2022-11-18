import styled from "styled-components";

interface CaseNumber {
  caseNum: number;
}

const Case = (props: CaseNumber) => {
  return (
    <Wrap>
      <LeftContainer>
        <LeftTitleContainer>
          <h1>CASE STUDY {`${props.caseNum}`}</h1>
          <HashTag caseNum={props.caseNum}>
            <div>
              {props.caseNum === 1
                ? `#자율과 몰입`
                : props.caseNum === 2
                ? `#성장하는 우리`
                : `#우연한 발견`}
            </div>
            <div>
              {props.caseNum === 1
                ? `#일과 휴식 사이`
                : props.caseNum === 2
                ? `#소통과 연대`
                : `#또다른 성장`}
            </div>
            <div>
              {props.caseNum === 1
                ? `#워케이션`
                : props.caseNum === 2
                ? `#긍정적 충돌`
                : `#느끼고 생각하고 나누고`}
            </div>
          </HashTag>
        </LeftTitleContainer>
        <MainText>
          <h1>
            {props.caseNum === 1
              ? `느슨한 공간
              충만한 영감
              `
              : props.caseNum === 2
              ? `연대의 광장
              단단한 성장`
              : `발견의 장소
              생각의 확장`}
          </h1>
          <CollaborationLogo></CollaborationLogo>
        </MainText>

        <ExplanationContainer>
          <div>
            {props.caseNum === 1
              ? `새로운 시대의 뉴-워커를 위한 워크 플레이스 오-피스 제주 사계점.
            자율적이고 몰입하고, 영감을 채우는 공간을 확인해 보세요.`
              : props.caseNum === 2
              ? `체인지메이커를 위한 협업과 연대의 공간, 헤이그라운드.
다양한 생각의 화학 작용이 일어나고, 비전을 공유하며
함께 성장하는 공간을 확인해보세요.`
              : `도심 속 워커를 위한 휴식의 공간, 카페꼼마.
휴식 속에서 우연처럼 마주하는 발견과
생각이 확장되는 공간을 확인해 보세요.`}
          </div>
          <ExplanationsButton caseNum={props.caseNum}>
            오-피스 제주 사례 둘러보기
          </ExplanationsButton>
        </ExplanationContainer>
      </LeftContainer>

      <RightContainer></RightContainer>
    </Wrap>
  );
};

export default Case;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
`;

const LeftContainer = styled.div`
  width: 35%;
  height: 100%;
  /* background: green; */
  position: absolute;
  top: 0;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LeftTitleContainer = styled.div`
  width: 100%;
  & h1 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
`;
const HashTag = styled.div<{ caseNum?: number }>`
  width: 80%;
  width: ${(props) => (props.caseNum === 3 ? `80%` : `65%`)};
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  & div {
    font-size: 14px;
    border-radius: 40px;
    border: 2px solid #000;
    text-align: center;
    padding: 0.4rem 0.8rem;
  }
`;

const MainText = styled.div`
  width: 100%;
  margin-top: 50px;
  & h1 {
    font-size: 80px;
    margin: 0;
    white-space: pre-line;
  }
`;
const CollaborationLogo = styled.div`
  width: 65%;
  height: 42px;
  background: #000;
  margin-top: 30px;
`;
const ExplanationContainer = styled.div`
  width: 100%;
  & div {
    white-space: pre-line;
    line-height: 1.5rem;
    font-size: 14px;
    font-weight: 700;
  }
`;
const ExplanationsButton = styled.div<{ caseNum: number }>`
  margin-top: 16px;
  border: ${(props) =>
    props.caseNum === 1
      ? `2px solid #2757A4`
      : props.caseNum === 2
      ? `2px solid #00A75D`
      : `2px solid #EB6D65`};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 0.8rem;
  font-size: 14px;
  color: ${(props) =>
    props.caseNum === 1
      ? `#2757A4`
      : props.caseNum === 2
      ? `#00A75D`
      : `#EB6D65`};
  cursor: pointer;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background: red;
  position: absolute;
  top: 0;
  right: 5%;
`;
