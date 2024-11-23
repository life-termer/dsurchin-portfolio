import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Card from "../../ui/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const StyledContactLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(3, 300px);
  gap: 3rem;
`;
const GridItem = styled.div`
  min-height: 250px;
  min-width: 250px;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  svg {
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
    cursor: pointer;
    svg {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
      box-shadow: 0px 2px 3px var(--backdrop-color-brand);
      filter: grayscale(0);
    }
  }
  svg {
  }
  &:nth-child(1) {
    svg {
      color: #0a66c2;
    }
  }
  &:nth-child(2) {
    svg {
      color: #00405d;
    }
  }
  &:nth-child(3) {
    svg {
      color: #ea4335;
    }
  }
  &:nth-child(4) {
    grid-column: 2 / 3;
    svg {
      color: #25d366;
    }
  }
`;

function AboutLayout() {
  const [searchParams] = useSearchParams();
  const scope = useRef();
  const filters = useRef();
  let tl = new gsap.timeline();

  function handleClick(link) {
    if (link) window.open(link, "_blank").focus();
  }

  return (
    <Container>
      <StyledContactLayout ref={scope}>
        <GridWrapper>
          <GridItem
            onClick={() => handleClick("https://www.linkedin.com/in/dsurchin/")}
          >
            <Card type="contact">
              <FaLinkedin />
            </Card>
          </GridItem>
          <GridItem>
            <p>
              Frontend-focused developer with experience in full-stack
              development, based in Ljubljana, Slovenia. With proficiency in
              React and JavaScript and modern front-end tools, I aim to
              provide an exceptional user experience on every project. I love
              turning complex ideas into simple, elegant digital interfaces,
              Currently working remotely, I collaborate with clients to deliver
              scalable, user-centric digital solutions.
            </p>
            <p>
              I&apos;m driven by a constant desire to learn and improve my skills,
              always exploring new development tools and techniques to stay at
              the forefront of web technology. I&apos;m eager to take on large-scale
              React projects and tackle complex challenges, while ensuring
              performance, accessibility, and an excellent user experience. My
              goal is to continue growing as a developer, pushing the boundaries
              of what&apos;s possible in the world of web development.
            </p>
          </GridItem>
        </GridWrapper>
      </StyledContactLayout>
    </Container>
  );
}

export default AboutLayout;
