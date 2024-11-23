import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import AnimatedHeading from "../../ui/AnimatedHeading";
import { useLocation } from "react-router-dom";
import { RxDividerHorizontal } from "react-icons/rx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { breakpointDown } from "../../styles/GlobalStyles";

const grow = "60%";
const shrink = "40%";

const StyledHomeLayout = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  height: 100px;
  top: 28px;
  width: 100%;
  left: 0;
  z-index: 99;
  transition: all 0.3s linear;
  ${(props) =>
    props.$page != "/" &&
    css`
      background-color: var(--backdrop-color);
      @media (max-width: 760px) {
        div {
          &:last-child {
            ${Divider},
            h3 {
              display: none;
            }
          }
        }
      }
    `}
  ${(props) =>
    props.$page === "/" &&
    css`
      left: 5vw;
      top: 50px;
      width: calc(100% - 10vw);
      height: 90vh;
      @media (max-width: 900px) {
        position: static;
        justify-content: flex-start;
        height: auto;
        flex-wrap: wrap;
        top: 28px;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
      div {
        &:last-child {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) {
          position: relative;
          width: 100%;
          height: calc(25vh - 14px);
          min-height: 200px;
          &:nth-child(1) {
            order: 2;
          }
          &:nth-child(2) {
            order: 3;
          }
          &:nth-child(3) {
            order: 4;
          }
          &:last-child {
            min-height: 300px;
            order: 1;
          }
        }
        @media (min-width: 900px) {
          &:hover {
            width: ${grow};
            height: ${grow};
          }
        }
      }
      @media (min-width: 900px) {
        &:has(div:nth-child(1):hover) {
          div:nth-child(2) {
            width: ${shrink};
          }
          div:nth-child(3) {
            width: ${grow};
            height: ${shrink};
          }
          div:nth-child(4) {
            width: ${shrink};
          }
        }
        &:has(div:nth-child(2):hover) {
          div:nth-child(1) {
            width: ${shrink};
          }
          div:nth-child(3) {
            width: ${shrink};
          }
          div:nth-child(4) {
            width: ${grow};
            height: ${shrink};
          }
        }
        &:has(div:nth-child(3):hover) {
          div:nth-child(1) {
            width: ${grow};
            height: ${shrink};
          }
          div:nth-child(2) {
            width: ${shrink};
          }
          div:nth-child(4) {
            width: ${shrink};
          }
        }
        &:has(div:nth-child(4):hover) {
          div:nth-child(1) {
            width: ${shrink};
          }
          div:nth-child(2) {
            width: ${grow};
            height: ${shrink};
          }
          div:nth-child(3) {
            width: ${shrink};
          }
        }
      }
    `}
`;
const Divider = styled.span`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  opacity: 0;
  svg {
    width: 100%;
    height: auto;
    transition: all 0.3s linear;
  }
  ${(props) =>
    props.$page != "/" &&
    css`
      width: 30px;
      ${breakpointDown(
        css`
          width: 20px;
        `,
        "900px"
      )};
      ${breakpointDown(
        css`
          width: 10px;
        `,
        "400px"
      )};
      svg {
        transform: rotate(90deg);
      }
    `}
`;

function HomeLayout() {
  const { pathname } = useLocation();
  const scope = useRef();
  const item = useRef();

  useGSAP(
    () => {
      gsap.to(item.current, {
        opacity: 1,
        delay: 1.5,
        duration: 0.3,
        ease: "power1.out",
      });
    },
    { scope: scope }
  );

  return (
    <StyledHomeLayout $page={pathname} ref={scope}>
      <Card type="home" link="/work">
        <AnimatedHeading heading="Work" id="heading01" as="h2" delay={0.4} />
      </Card>
      <Card type="home" link="/about">
        <AnimatedHeading heading="About" id="heading02" as="h2" delay={0.4} />
      </Card>
      <Card type="home" link="/contact">
        <AnimatedHeading heading="Contact" id="heading03" as="h2" delay={0.4} />
      </Card>
      <Card type="home" disabled={true}>
        <AnimatedHeading
          heading="Dmitry Surchin"
          id="heading04"
          as="h2"
          delay={0.4}
        />
        <Divider $page={pathname} ref={item}>
          <RxDividerHorizontal />
        </Divider>
        <AnimatedHeading
          heading="Web Developer"
          id="heading05"
          as="h3"
          delay={0.4}
        />
      </Card>
    </StyledHomeLayout>
  );
}

export default HomeLayout;
