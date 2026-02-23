import styled from "styled-components";
import Container from "../../ui/Container";
import Filters from "../../ui/Filters";
import { projects } from "../../data/data-projects";
import Card from "../../ui/Card";
import WorkCard from "../../ui/WorkCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "../../ui/Modal";

// gsap.registerPlugin(ScrollTrigger);

const StyledWorkLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  @media (max-width: 1500px) {
    gap: 3rem;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
const GridItem = styled.div`
  position: relative;
  min-height: 500px;
  opacity: 0;
  top: 20px;
  visibility: hidden;
  max-width: 420px;
`;

function WorkLayout() {
  const [searchParams] = useSearchParams();
  const scope = useRef();

  let workTimeline = new gsap.timeline();

  //1. Filter
  const filterValue = searchParams.get("filter");

  let filteredProjects = projects;
  if (filterValue) {
    filteredProjects = projects.filter((project) =>
      project.tags.some((tag) => tag.name === filterValue)
    );
  }

  // 2. Sort
  let sortedProjects = filteredProjects;
  let field = "";
  const sortByName = searchParams.get("sortByName") || "asc";
  const sortByYear = searchParams.get("sortByYear");
  if (sortByName) {
    field = "name";
    const modifier = sortByName === "asc" ? 1 : -1;
    sortedProjects = filteredProjects.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1 * modifier;
      } else if (a[field] < b[field]) {
        return -1 * modifier;
      }
      return 0;
    });
  }
  if (sortByYear) {
    field = "year";
    const modifier = sortByYear === "asc" ? 1 : -1;
    sortedProjects = filteredProjects.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
  }

  useGSAP(
    () => {
      workTimeline
        .to(".item", {
          visibility: "visible",
        })
        .to(".item", {
          opacity: 1,
          top: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.out",
        });
    },
    { dependencies: [searchParams], scope: scope, revertOnUpdate: true }
  );

  return (
    <>
    <Container>
      <StyledWorkLayout ref={scope}>
        <Filters />
        <GridWrapper>
          {sortedProjects.map((project) => {
            return (
              <GridItem key={project.id} className="item">
                <Card type="project">
                  <WorkCard project={project} data-glow="false"></WorkCard>
                </Card>
              </GridItem>
            );
          })}
        </GridWrapper>
      </StyledWorkLayout>
    </Container>
    </>
  );
}

export default WorkLayout;
