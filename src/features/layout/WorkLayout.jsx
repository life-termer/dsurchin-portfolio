import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Filters from "../../ui/Filters";
import { projects } from "../../data/data-projects";
import Card from "../../ui/Card";
import WorkCard from "../../ui/WorkCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StyledWorkLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;
const GridItem = styled.div`
  min-height: 500px;
  opacity: 0;
`;

const projectsList = projects;

function WorkLayout() {
  const scope = useRef();
  const filters = useRef();

  useGSAP(
    () => {
      new gsap.timeline()
        .to(filters.current, {
          opacity: 1,
          delay: 1.5,
          duration: 0.5,
          stagger: 0.15,
          ease: "power1.out",
        })
        .to(
          ".item",
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power1.out",
          },
          "-=0.5"
        );
    },
    { scope: scope }
  );

  return (
    <Container>
      <StyledWorkLayout ref={scope}>
        <Filters filters={filters} />
        <GridWrapper>
          {projectsList.map((project) => {
            return (
              <GridItem key={project.id} className="item">
                <Card type="project">
                  <WorkCard project={project}></WorkCard>
                </Card>
              </GridItem>
            );
          })}
        </GridWrapper>
      </StyledWorkLayout>
    </Container>
  );
}

export default WorkLayout;
