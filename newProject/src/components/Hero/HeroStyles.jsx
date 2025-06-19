import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  width: 1080px;
  height: 526px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  border: 2px solid white;
  position: absolute;
  top: 163px;
  left: 100px;
  background-color: rgba(255, 255, 255, 0.14); /* ✅ Only background is faded */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  color: #ffffff;
  text-align: center;
`;

export const HeroTitleSpan = styled.span`
  font-size: 48px;
  color: #dd4e3e;
  text-align: center;
`;

export const HeroSubHeading = styled.div`
  width: 857px;
  height: 68px;
  top: 305px;
  left: 212px;
  color: #c7c7c7;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const GradientQrCard = styled.div`
  width: 188px;
  height: 222px;
  background: #232323;
  border-width: 1px;
  border-radius: 20px;
  margin-bottom: 150px;
  padding: 8px;
  border-image-source: linear-gradient(
    144.86deg,
    rgb(70, 64, 64) -2.25%,
    rgb(102, 102, 102) 105.04%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallBox = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 10px;
  background: #d9d9d9;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QrImage = styled.img`
  width: 152px;
  height: 152px;
`;

export const QrText = styled.div`
  width: 170px;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: white;
  border-radius: 6px;
  padding: 6px;
`;

export const PhoneImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
`;

export const HeroBottomRow = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-around;
`;
