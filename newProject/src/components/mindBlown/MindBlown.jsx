import { useState } from "react";
import styled from "styled-components";

const MindBlown = () => {
  let BottomMindBlownParagraphs = [
    <>
      <BottomMindBlownParaH1>
        Say
        <BottomMindBlownParaSpan> Good Bye </BottomMindBlownParaSpan>
        to Boring Scrolls..
      </BottomMindBlownParaH1>
      <MindBlownDescription>
        Endless scrolling is so last season. Your fingers (and your brain)
        deserve better. With BuyDost, you swipe — fast, fresh, and fun. We
        promise that shopping has never felt this satisfying.
      </MindBlownDescription>
    </>,
    <>
      <BottomMindBlownParaH1>
        Never see the same product Twice.
        <BottomMindBlownParaSpan> New Stuff </BottomMindBlownParaSpan>
        Every Time You Swipe !
      </BottomMindBlownParaH1>
      <MindBlownDescription>
        No Repeats. No wasted Time. Just fresh Picks &mdash; every. single.
        Time.
      </MindBlownDescription>
    </>,
  ];
  const [currentIndex, setcurrentIndex] = useState(0);

  const goRight = () => {
    setcurrentIndex((prev) => {
      //BottomMindBlownParagraphs.length will be static and only 'prev' which is "currentIndex" will be changed.
      //Here the 'length' is '2'

      if (prev === BottomMindBlownParagraphs.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const goLeft = () => {
    setcurrentIndex((prev) => {
      if (prev === 0) {
        return BottomMindBlownParagraphs.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  //   const goRight = () => {
  //     setcurrentIndex((prev) =>
  //       prev === BottomMindBlownParagraphs.length - 1 ? 0 : prev + 1
  //     );
  //   };

  //   const goLeft = () => {
  //     setcurrentIndex((prev) =>
  //       prev === 0 ? BottomMindBlownParagraphs.length - 1 : prev - 1
  //     );
  //   };

  return (
    <MindBlownParent>
      <MindBlownPara>Ready to be mind-blown?</MindBlownPara>
      <BottomMindBlown>
        <LargeGradientBox />
        <BottomMindBlownPara>
          {BottomMindBlownParagraphs[currentIndex]}
          <ArrowContainer>
            <ArrowButton onClick={goLeft}>&larr;</ArrowButton>
            <ArrowButton onClick={goRight}>&rarr;</ArrowButton>
          </ArrowContainer>
        </BottomMindBlownPara>
      </BottomMindBlown>

      {/* Dots Below */}
      <CarouselDots>
        {BottomMindBlownParagraphs.map((_, index) => (
          <Dot key={index} isActive={currentIndex === index} />
        ))}
      </CarouselDots>
    </MindBlownParent>
  );
};

export default MindBlown;

const MindBlownParent = styled.div`
  width: 1284px;
  height: 856px;
  font-family: "Bricolage Grotesque", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const MindBlownPara = styled.p`
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  min-width: 634px;
  height: 67px;
  font-size: 56px;
  line-height: 100%;
  letter-spacing: 0;
  background: linear-gradient(90deg, #ffffff 0%, #945858 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const BottomMindBlown = styled.div`
  display: flex;
  max-height: 450px;
  gap: 32px;
`;

const BottomMindBlownPara = styled.div`
  max-width: 650px;
  height: 450px;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const MindBlownDescription = styled.p`
  height: auto;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
`;

const BottomMindBlownParaH1 = styled.h1`
  font-size: 42px;
  color: #ffffff;
`;

const BottomMindBlownParaSpan = styled.span`
  font-size: 42px;
  color: #dd4e3e;
`;

const LargeGradientBox = styled.div`
  width: 400px;
  display: flex;
  flex: 1;
  border-radius: 20px;
  background-color: #232323;
  background-image: url("/images/MindBlownPhone.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-image-source: linear-gradient(
    144.86deg,
    rgb(70, 64, 64) -2.25%,
    rgb(102, 102, 102) 105.04%
  );
  border-image-slice: 1;
  box-sizing: border-box;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center; /* center horizontally */
  gap: 12px;
  margin-top: 32px;
`;

const Dot = styled.div`
  width: 36px;
  height: 6px;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? "#DD4E3E" : "#707070")};
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ArrowButton = styled.button`
  width: 101px;
  height: 53px;
  border-radius: 36px;
  border: 1px solid #ffb5b5;
  background: linear-gradient(
    105.69deg,
    rgba(184, 184, 184, 0.26) -8.12%,
    rgba(51, 51, 51, 0.54) 90.34%
  );
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #dd4e3e;
    color: #fff;
  }
`;
