import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { breakpointDown } from "../styles/GlobalStyles";

const StyledHeading = styled.h1`
  text-shadow: var(--color-brand) 1px 0 6px;
  color: var(--color-grey-700);
  transition: all 0.3s ease-out;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.5rem;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4rem;
      text-align: center;
      ${breakpointDown(
        css`
          font-size: 3rem;
        `,
        "900px"
      )};
      ${breakpointDown(
        css`
          font-size: 2.5rem;
        `,
        "500px"
      )};
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      text-align: center;
      ${breakpointDown(
        css`
          font-size: 2.5rem;
        `,
        "900px"
      )};
      ${breakpointDown(
        css`
          font-size: 2rem;
        `,
        "500px"
      )};
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
    `}
  ${(props) =>
    props.as === "span" &&
    css`
      font-size: 1.5rem !important;
      text-shadow: var(--color-brand) 1px 0 1px;
    `}
  line-height: 1.4;
  font-weight: 200;
  span {
    opacity: 0;
  }
  ${(props) =>
    props.$page != "/" &&
    css`
      font-size: 80%;
      @media (max-width: 900px) {
        font-size: 70%;
      }
      @media (max-width: 500px) {
        font-size: 60%;
      }
    `}
`;

function AnimatedHeading({ heading, id, delay = 0, as }) {
  const { pathname } = useLocation();
  const ref = useRef();
  const duration = as === "span" ? 0.2 : 0.4;
  const stagger = as === "span" ? 0.05 : 0.1;
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
