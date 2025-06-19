import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 1284px;
  height: 856px;
  margin: auto;
  position: relative;
`;

export const ImageLogo = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 7px;
  left: 62px;
`;

export const StyledBackgroundImage = styled.img`
  width: 1284px;
  height: 856px;
  position: absolute;
  top: 24px;
  opacity: 50%;
`;

export const StyledBanner = styled.div`
  width: 799px;
  height: 80px;
  position: absolute;
  top: 51px;
  right: 244px;
  border-radius: 20px;
  background: linear-gradient(#000, #000) padding-box,
    /* Inner black fill */ linear-gradient(90deg, #ffc7c7, #581717) border-box; /* Border gradient */
  border: 1px solid transparent;
`;

export const UlNav = styled.ul`
  background-color: #000000;
  color: #ffffff;
  list-style-type: none;
  display: flex;
  text-align: justify;
  justify-content: space-around;
  margin: 25px 25px;
  white-space: nowrap;
`;

export const LiNav = styled.li`
  width: 94px;
  height: 29px;
  font-size: 24px;
`;

export const ParentDiv = styled.div`
  display: flex;
`;
