import styled from "styled-components";
import { tags } from "../data/data-tags";
import SliderIcons from "../features/layout/SliderIcons";

const StyledFooter = styled.footer`
  position: relative;
  border-top: 2px solid var(--color-grey-300);
  z-index: 10;
`;

function Footer() {
  return (
    <StyledFooter>
      <SliderIcons slides={tags} reverse={false} />
    </StyledFooter>
  );
}

export default Footer;
