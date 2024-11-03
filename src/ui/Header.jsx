import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-500);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-900);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

function Header() {
  return (
    <StyledHeader>
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
