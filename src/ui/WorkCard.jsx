import styled from "styled-components";

const StyledWorkCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 20;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
    object-position: top;
    transform: scale(1.05);
    transform-origin: 50% 20%;
    filter: grayscale(70%);
    opacity: 0.75;
  }
  &:hover {
    img {
      filter: grayscale(0%);
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const Heading = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  backdrop-filter: blur(3px);
  background-color: var(--backdrop-color);
  h4 {
    color: var(--color-brand);
  }
`;
const Tags = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

function WorkCard({ project }) {
  return (
    <StyledWorkCard>
      <img src="/zavodo/zavodo-main.jpeg" alt="" />
      <Heading>
        <h4>{project.name}</h4>
        <h4>{project.year}</h4>
      </Heading>
    </StyledWorkCard>
  );
}

export default WorkCard;
