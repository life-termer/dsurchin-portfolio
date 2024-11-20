import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
  width: 100%;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
