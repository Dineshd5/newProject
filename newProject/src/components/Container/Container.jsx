import styled from "styled-components";
import cardData from "./cardData";
// JSON-like card data
const Container = () => {
  return (
    <ParentContainer>
      <FlexContainer>
        {cardData.map((card, index) => (
          <ContentContainer>
            <IconWrapper>
              <CardIcon src={card.icon} alt="Cart Icon" />
            </IconWrapper>
            <ContentHeading>{card.title}</ContentHeading>
            <ContentPara>{card.description}</ContentPara>
            <HashTag>#OnlyOnBuyDost</HashTag>
          </ContentContainer>
        ))}
      </FlexContainer>
    </ParentContainer>
  );
};

export default Container;

const ParentContainer = styled.div`
  padding: 40px 20px;
  gap: 24px;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const ContentContainer = styled.div`
  width: 524px;
  height: 482px;
  padding: 32px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: rgba(28, 28, 28, 1);
  transition: border-image-source 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-radius: 20px;
    border-color: linear-gradient(229.79deg, #ffa1a1 0%, #c8c8c8 97.77%);
    border: 1px solid;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(63, 63, 63, 1);
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const ContentHeading = styled.h1`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  max-width: 312px;
`;

const ContentPara = styled.p`
  font-family: "SF Pro Display", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  max-width: 460px;
`;

const HashTag = styled.p`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 40px;
  font-weight: 600;
  width: 322px;
  height: 48px;
  line-height: 100%;
  background: linear-gradient(90deg, #ffffff 0%, #d97575 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 32px;
`;
