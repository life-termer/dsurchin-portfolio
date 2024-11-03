import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef } from "react";
import { cursorOffSet } from "../utils/helpers";
import { useDarkMode } from "../context/DarkModeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  /*  */
`;
const LayoutBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    z-index: 1;
    background-image: url(${(props) => props.bgImg});
    background-position: 50% 0;
    background-size: 142px 71px;
    background-repeat: repeat;
  }
`;
const Main = styled.main`
  overflow-y: auto;
  height: 90vh;
  position: relative;
`;
const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300vh;
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
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    layout.current.addEventListener("mousemove", cursorOffSet);
  }, []);

  useGSAP(() => {
    // use selectors...
    // gsap.to("h1", { rotation: "+=360", duration: 3 });

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
    // or refs...
    // gsap.to(circle.current, { rotation: "-=360", duration: 3 });
  });

  return (
    <StyledAppLayout ref={layout}>
      <Header />
      <Main ref={main}>
        <ContainerWrapper>
          <BackgroundWrapper>
            <LayoutBackground
              bgImg={isDarkMode ? "/bg-tile-dark.svg" : "/bg-tile.svg"}
              ref={background}
            />
          </BackgroundWrapper>
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
