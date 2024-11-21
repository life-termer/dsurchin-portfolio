import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

const StyledHeading = styled.h1`
  text-shadow: var(--color-brand) 1px 0 6px;
  color: var(--color-grey-700);
  transition: all 0.3s ease-out;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.5rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
    `}
  line-height: 1.4;
  font-weight: 200;
  span {
    opacity: 0;
  }
  ${(props) => props.$page != "/" && css`
      font-size: 80%;
  `}
`;

function AnimatedHeading({ heading, id, delay = 0, as }) {
  const { pathname } = useLocation();
  const ref = useRef();
  const duration = 0.4;
  const stagger = 0.1;
  const chars = heading.split("");
  const ease = "power1.out";

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
        "-=100%"
      );
  });
  return (
    <StyledHeading ref={ref} id={id} as={as} $page={pathname}>
      {chars.map((char, index) => {
        return <span key={index}>{char}</span>;
      })}
    </StyledHeading>
  );
}

export default AnimatedHeading;
