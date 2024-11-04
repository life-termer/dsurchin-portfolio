import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styled from "styled-components";

const StyledHeading = styled.h2`
  font-weight: 200;
  span {
    opacity: 0;
  }
`;

{
  /* TODO: add type prop = h1, h2 etc... */
}
function AnimatedHeading({ heading, id, delay = 0 }) {
  const h2 = useRef();
  const duration = 0.3;
  const stagger = 0.1;
  const chars = heading.split("");
  const ease = "power1.out";
  const tlDelay = `-=${(duration + chars.length * stagger).toFixed(2)}`;

  useGSAP(() => {
    new gsap.timeline()
      .to(`#${id} span`, {
        fontWeight: 800,
        delay: delay + 0.3,
        duration: duration,
        stagger: stagger,
        ease: ease,
      })
      .to(
        `#${id} span`,
        { opacity: 1, duration: duration, stagger: stagger, ease: ease },
        tlDelay
      );
  });
  return (
    <StyledHeading ref={h2} id={id}>
      {chars.map((char, index) => {
        return <span key={index}>{char}</span>;
      })}
    </StyledHeading>
  );
}

export default AnimatedHeading;
