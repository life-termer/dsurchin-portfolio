import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef } from "react";
import { cursorOffSet } from "../utils/helpers";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayoutBackground from "./LayoutBackground";

gsap.registerPlugin(ScrollTrigger);

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--color-grey-300);
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0.5;
    will-change: background, opacity;
    transition-duration: 400ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: opacity;
    background-image: radial-gradient(
      700px at var(--cursor-x) var(--cursor-y),
      var(--color-grey-500),
      transparent 40%
    );
    background-size: auto;
    background-origin: padding-box;
    z-index: -1;
  }
`;
const Main = styled.main`
  overflow-y: auto;
  height: 90vh;
  position: relative;
`;
const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function AppLayout() {
  const layout = useRef();
  const background = useRef();
  const container = useRef();
  const main = useRef();

  useEffect(() => {
    layout.current.addEventListener("mousemove", cursorOffSet);
  }, []);

  useGSAP(() => {
    gsap.set(background.current, {
      yPercent: -30,
    });
    gsap.to(background.current, {
      scrollTrigger: {
        scroller: main.current,
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
        markers: true,
      },
      ease: "linear",
      yPercent: 30,
    });
  });

  return (
    <StyledAppLayout ref={layout}>
      <Header />
      <Main ref={main}>
        <ContainerWrapper>
          <LayoutBackground background={background} />
          <Container ref={container}>
            <Outlet />
          </Container>
        </ContainerWrapper>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
