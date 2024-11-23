import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import AnimatedHeading from "../../ui/AnimatedHeading";
import { useLocation } from "react-router-dom";
import { RxDividerHorizontal } from "react-icons/rx";

const grow = "60%";
const shrink = "40%";

const StyledHomeLayout = styled.div`
  position: fixed;
  display: flex;
  align-content: center;
  justify-items: center;
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
    `}
  ${(props) =>
    props.$page === "/" &&
    css`
      left: 5vw;
      top: 50px;
      width: calc(100% - 10vw);
      height: 90vh;
      div {
        &:hover {
          width: ${grow};
          height: ${grow};
        }
      }
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
    `}
`;
const Divider = styled.span`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  svg {
    width: 100%;
    height: auto;
    transition: all 0.3s linear;
  }
  ${(props) =>
    props.$page != "/" &&
    css`
      width: 30px;
      svg {
        transform: rotate(90deg);
      }
    `}
`;

function HomeLayout() {
  const { pathname } = useLocation();

  return (
    <StyledHomeLayout $page={pathname}>
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
        <Divider $page={pathname}>
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
