import styled from "styled-components";
import MindBlown from "../../components/mindBlown/MindBlown";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
    <HomeContainer>
      <MindBlown />
      <Container />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  justify-content: flex-start; /* top alignment */
  min-height: 100vh;
  background-color: #0a0a0a; /* or whatever your full-page bg is */
`;
