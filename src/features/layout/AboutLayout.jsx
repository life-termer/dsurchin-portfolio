import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Card from "../../ui/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import AnimatedHeading from "../../ui/AnimatedHeading";
import { Tooltip } from "react-tooltip";

const StyledContactLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .react-tooltip {
    font-size: 1rem;
    background: var(--color-grey-800);
    color: var(--color-grey-0);
  }
`;
const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: 300px auto;
  gap: 3rem;
  @media (max-width: 1200px) {
    grid-template-columns: 200px auto;
    gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const GridItem = styled.div`
  position: relative;
  min-height: 250px;
  min-width: 250px;
  width: 100%;
  height: auto;
  @media (max-width: 1200px) {
    min-height: 150px;
    min-width: 150px;
  }
  @media (max-width: 900px) {
    &:first-child {
      height: 200px;
      width: 200px;
      order: 2;
      margin: auto;
    }
    &:last-child {
      order: 1;
    }
  }
  ${(props) =>
    props.type === "icon" &&
    css`
      opacity: 0;
      top: 20px;
      &:hover {
        cursor: pointer;
      }
    `}
  svg {
    color: var(--color-brand);
    width: 100%;
    height: auto;
    transition: all 0.5s linear;
    object-position: top;
    transform: rotateX(15deg) rotateY(-5deg) rotateZ(1deg) scale(0.86);
    box-shadow: 3px 3px 3px 2px var(--backdrop-color-brand);
    transition: 2s;
    transform-origin: center;
    will-change: transform;
    filter: grayscale(70%);
  }
  &:hover {
    svg {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
      box-shadow: 0px 2px 3px var(--backdrop-color-brand);
      filter: grayscale(0);
    }
  }
`;
const P = styled.p`
  font-size: 95%;
  @media (max-width: 500px) {
    font-size: 90%;
  }
  &.item {
    opacity: 0;
  }
  .item {
    opacity: 0;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

function AboutLayout() {
  const scope = useRef();
  const icon = useRef();

  function handleClick(link) {
    if (link) window.open(link, "_blank").focus();
  }

  let aboutTimeline = new gsap.timeline();
  useGSAP(
    () => {
      aboutTimeline
        .to(".item", {
          opacity: 1,
          top: 0,
          delay: 2,
          duration: 0.5,
          stagger: 0.25,
          ease: "power1.out",
        })
        .to(icon.current, {
          opacity: 1,
          top: 0,
          delay: 0,
          duration: 0.5,
          ease: "power1.out",
        });
    },
    { scope: scope }
  );

  return (
    <Container>
      <StyledContactLayout ref={scope}>
        <GridWrapper>
          <GridItem
            type="icon"
            ref={icon}
            data-tooltip-id="resume"
            data-tooltip-content="Download resume"
            onClick={() => handleClick("/resume/Dmitry Surchin Resume.pdf")}
          >
            <Card type="contact">
              <HiOutlineDocumentText />
            </Card>
          </GridItem>
          <GridItem>
            <P>
              <AnimatedHeading
                heading="Frontend-focused developer"
                id="about01"
                as="span"
                delay={0.1}
              />
              <span className="item">
                &nbsp;with experience in full-stack development, based in
                Ljubljana, Slovenia. With proficiency in React and JavaScript
                and modern front-end tools, I aim to provide an exceptional user
                experience on every project.
              </span>
            </P>
            <P className="item">
              I love turning complex ideas into simple, elegant digital
              interfaces. Currently working remotely, I collaborate with clients
              to deliver scalable, user-centric digital solutions.
            </P>
            <P className="item">
              I&apos;m driven by a constant desire to learn and improve my
              skills, always exploring new development tools and techniques to
              stay at the forefront of web technology. I&apos;m eager to take on
              large-scale React projects and tackle complex challenges, while
              ensuring performance, accessibility, and an excellent user
              experience.
            </P>
            <P className="item">
              My goal is to continue growing as a developer, pushing the
              boundaries of what&apos;s possible in the world of web
              development.
            </P>
          </GridItem>
        </GridWrapper>
        <Tooltip id="resume" />
      </StyledContactLayout>
    </Container>
  );
}

export default AboutLayout;
