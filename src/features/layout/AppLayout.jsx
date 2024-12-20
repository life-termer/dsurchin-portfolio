import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayoutBackground from "../../ui/LayoutBackground";
import DarkModeToggle from "../../ui/DarkModeToggle";
import { useMouseMove } from "../../hooks/useMouseMove";
import HomeLayout from "./HomeLayout";

gsap.registerPlugin(ScrollTrigger);

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;
  background-color: var(--color-grey-400);
  z-index: 0;
  /* @media (min-width: 1200px) {
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
        700px at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        var(--color-brand-yellow-50),
        transparent 40%
      );
      background-size: auto;
      background-origin: padding-box;
      z-index: -1;
    }
  } */
`;
const Main = styled.main`
  overflow-y: auto;
  height: calc(100dvh - 60px);
  position: relative;
`;
const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  height: auto;
  transition: all 1s ease;
  ${(props) =>
    props.$page === "/" &&
    css`
      @media (min-width: 900px) {
        height: 100%;
      }
    `}
`;
const Container = styled.div`
  max-width: 100rem;
  padding: 10rem 0.75rem 3rem 0.75rem;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    height: auto;
    padding: 9rem 0.75rem 3rem 0.75rem;
  }
  @media (max-width: 500px) {
    height: auto;
    padding: 8rem 0.5rem 1rem 0.5rem;
  }
  ${(props) =>
    props.$page === "/" &&
    css`
      @media (max-width: 900px) {
        padding-top: 3rem;
      }
      @media (max-width: 500px) {
        padding-top: 1rem;
      }
    `}
`;

function AppLayout() {
  const layout = useRef();
  const background = useRef();
  const container = useRef();
  const main = useRef();

  // const [status] = useMouseMove();
  const { pathname } = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
    main.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useGSAP(
    () => {
      gsap.set(background.current, {
        yPercent: -15,
      });
      gsap.to(background.current, {
        scrollTrigger: {
          scroller: main.current,
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          // markers: true,
        },
        ease: "linear",
        yPercent: 15,
      });
    },
    { scope: layout }
  );

  return (
    <StyledAppLayout ref={layout}>
      <DarkModeToggle />
      <Header />
      <Main ref={main}>
        <ContainerWrapper $page={pathname}>
          <LayoutBackground background={background} />
          <Container ref={container} $page={pathname}>
            <HomeLayout />
            <Outlet />
          </Container>
        </ContainerWrapper>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
