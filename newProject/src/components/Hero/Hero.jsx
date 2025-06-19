import {
  StyledHeroContainer,
  HeroTitle,
  HeroTitleSpan,
  HeroSubHeading,
  HeroContent,
  GradientQrCard,
  HeroBottomRow,
  PhoneImg,
  SmallBox,
  QrImage,
  QrText,
} from "./HeroStyles";

const Hero = () => {
  return (
    <StyledHeroContainer>
      <HeroContent>
        <HeroTitle>
          Welcome to <HeroTitleSpan>BuyDost</HeroTitleSpan>
        </HeroTitle>

        <HeroSubHeading>
          We’re about to change the way you shop forever — it’s going to be more
          fun, more personal, and more connected.
        </HeroSubHeading>
        <HeroBottomRow>
          <GradientQrCard>
            <SmallBox>
              <QrImage src="./images/qr.png" alt="QR Code" />
            </SmallBox>
            <QrText>
              Scan the code to join our waitlist and enjoy exclusive perks
            </QrText>
          </GradientQrCard>

          <PhoneImg src="./images/phoneImg.png" />
        </HeroBottomRow>
      </HeroContent>
    </StyledHeroContainer>
  );
};

export default Hero;
