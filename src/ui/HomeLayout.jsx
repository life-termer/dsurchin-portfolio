import styled, { css } from "styled-components";
import Card from "../ui/Card";
import AnimatedHeading from "../ui/AnimatedHeading";
import { useLocation } from "react-router-dom";

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
        <AnimatedHeading heading="Some" id="heading04" as="h2" delay={0.4} />
      </Card>
    </StyledHomeLayout>
  );
}

export default HomeLayout;
