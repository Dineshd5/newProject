import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default StyledButton;
