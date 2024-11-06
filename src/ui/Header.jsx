import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import SliderIcons from "../features/layout/SliderIcons";
import { tags } from "../data/data-tags";

const StyledHeader = styled.header`
  border-bottom: 2px solid var(--color-grey-300);
  position: relative;
  z-index: 100;
`;

function Header() {
  return (
    <StyledHeader>
      <SliderIcons slides={tags} reverse={true} />
      {/* <DarkModeToggle /> */}
    </StyledHeader>
  );
}

export default Header;
