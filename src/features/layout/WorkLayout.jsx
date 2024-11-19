import styled, { css } from "styled-components";
import Container from "../../ui/Container";
import Filters from "../../ui/Filters";
import { projects } from "../../data/data-projects";
import Card from "../../ui/Card";
import WorkCard from "../../ui/WorkCard";

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
`;

const projectsList = projects;

function WorkLayout() {
  return (
    <Container>
      <StyledWorkLayout>
        <Filters />
        <GridWrapper>
          {projectsList.map((project) => {
            return (
              <GridItem key={project.id}>
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
