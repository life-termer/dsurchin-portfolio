import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Card from "../../ui/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

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
  /* opacity: 0; */
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
      color: #0a66c2
    }
  }
  &:nth-child(2) {
    
    svg {
      color: #00405d
    }
  }
  &:nth-child(3) {
    
    svg {
      color: #ea4335
    }
  }
  &:nth-child(4) {
    grid-column: 2 / 3;
    svg {
      color: #25d366;
    }
  }
`;

function ContactLayout() {
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
          <GridItem onClick={()=> handleClick('https://www.linkedin.com/in/dsurchin/')}>
            <Card type="contact"><FaLinkedin /></Card>
          </GridItem>
          <GridItem onClick={()=> handleClick('https://github.com/life-termer')}>
            <Card type="contact"><FaGithub /></Card>
          </GridItem>
          <GridItem onClick={()=> handleClick('mailto:dsurchin@gmail.com')}>
            <Card type="contact"><IoMailOutline /></Card>
          </GridItem>
          <GridItem onClick={()=> handleClick('https://wa.me/38651896611')}>
            <Card type="contact"><FaWhatsapp /></Card>
          </GridItem>
        </GridWrapper>
      </StyledContactLayout>
    </Container>
  );
}

export default ContactLayout;
