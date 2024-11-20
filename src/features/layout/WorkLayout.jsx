import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Filters from "../../ui/Filters";
import { projects } from "../../data/data-projects";
import Card from "../../ui/Card";
import WorkCard from "../../ui/WorkCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

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
  /* opacity: 0; */
`;

function WorkLayout() {
  const [searchParams] = useSearchParams();
  const scope = useRef();
  const filters = useRef();
  let tl = new gsap.timeline();

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
  const sortByName = searchParams.get("sortByName");
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

  // useGSAP(
  //   () => {
  //     tl.to(filters.current, {
  //       opacity: 1,
  //       delay: 1.5,
  //       duration: 0.5,
  //       stagger: 0.15,
  //       ease: "power1.out",
  //     }).to(
  //       ".item",
  //       {
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.2,
  //         ease: "power1.out",
  //       },
  //       "-=0.5"
  //     );
  //   },
  //   { scope: scope }
  // );
  // useEffect(() => {
  //   tl.reverse();

  //   tl.play();
  //   console.log("play");
  // }, [filterValue, tl]);
  return (
    <Container>
      <StyledWorkLayout ref={scope}>
        <Filters filters={filters} />
        <GridWrapper>
          {sortedProjects.map((project) => {
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
