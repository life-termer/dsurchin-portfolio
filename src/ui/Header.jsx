import styled from "styled-components";
import SliderIcons from "../features/layout/SliderIcons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { tags } from "../data/data-tags";
import { useRef } from "react";

const StyledHeader = styled.header`
  border-bottom: 2px solid var(--color-grey-400);
  position: relative;
  z-index: 100;
  top: -30px;
`;

function Header() {
  const ref = useRef();
  useGSAP(
    () => {
      gsap.to(ref.current, {
        top: 0,
        duration: 0.5,
        delay: 1,
        ease: "linear",
      });
    },
    { scope: ref }
  );
  return (
    <StyledHeader ref={ref}>
      <SliderIcons slides={tags} reverse={true} />
    </StyledHeader>
  );
}

export default Header;
