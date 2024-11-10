import styled from "styled-components";
import SliderIcons from "../features/layout/SliderIcons";
import { tools } from "../data/data-tools";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const StyledFooter = styled.footer`
  position: relative;
  border-top: 2px solid var(--color-grey-400);
  z-index: 10;
  bottom: -30px;
`;

function Footer() {
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
    <StyledFooter ref={ref}>
      <SliderIcons slides={tools} reverse={false} />
    </StyledFooter>
  );
}

export default Footer;
