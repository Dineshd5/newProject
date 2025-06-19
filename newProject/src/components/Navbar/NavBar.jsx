import Hero from "../Hero/Hero";
import {
  ImageLogo,
  LiNav,
  ParentDiv,
  StyledBackgroundImage,
  StyledBanner,
  StyledNavbar,
  UlNav,
} from "./NavbarStyles";

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledBackgroundImage src="./images/MainBackground.png" />
      <ParentDiv>
        <ImageLogo src="images/logo.png" alt="logo" />
        <StyledBanner>
          <UlNav>
            <LiNav>Home</LiNav>
            <LiNav>About Us</LiNav>
            <LiNav>Why Us</LiNav>
            <LiNav>Career</LiNav>
          </UlNav>
        </StyledBanner>
      </ParentDiv>
      <Hero />
    </StyledNavbar>
  );
};

export default NavBar;
