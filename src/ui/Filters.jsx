import styled, { css } from "styled-components";
import Filter from "./Filter";
import { tags } from "../data/data-tags";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import FilterSort from "./FilterSort";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { LuFilter, LuFilterX } from "react-icons/lu";

const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  top: 20%;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  ${(props) =>
    props.$active &&
    css`
      transform: translateX(0);
    `}
`;
const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FiltersButton = styled.div`
  border: 1px solid var(--color-brand);
  border-radius: 4px;
  width: 36px;
  height: 36px;
  padding: 4px;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(120%, -50%);
  transition: transform 0.3s ease-out;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.$active &&
    css`
      transform: translate(50%, -50%);
    `}
`;

function Filters({ filters }) {
  const tagsList = tags;
  const [active, setActive] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter");
  function handleClick(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFiltersWrapper ref={filters} $active={active}>
      <Card type="filter">
        <StyledFilters>
          <h6>Sort By</h6>
          <FilterSort />
        </StyledFilters>
      </Card>
      <Card type="filter">
        <StyledFilters>
          {tagsList.map((tag) => {
            return (
              <Filter
                key={tag.name}
                tag={tag}
                isActive={tag.name === currentFilter}
                onClick={() => handleClick(tag.name)}
              />
            );
          })}
        </StyledFilters>
      </Card>
      <FiltersButton $active={active} onClick={() => setActive((a) => !a)}>
        {active ? <LuFilterX /> : <LuFilter />}
      </FiltersButton>
    </StyledFiltersWrapper>
  );
}

export default Filters;
