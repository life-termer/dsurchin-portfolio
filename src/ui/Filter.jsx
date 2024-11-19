import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  position: relative;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 0.4rem;
  ${(props) =>
    props.$isActive &&
    css`
      color: var(--color-brand);
      font-weight: 600;
    `}
  &:hover {
    color: var(--color-brand);
    cursor: pointer;
  }
  z-index: 10;
  transition: all 0.3s ease-out;
`;

function Filter({ tag, isActive, onClick }) {
  const { icon: Icon, name } = tag;

  return (
    <StyledFilter $isActive={isActive} disabled={false} onClick={onClick}>
      <Icon /> {name}
    </StyledFilter>
  );
}

export default Filter;
