import styled from "styled-components";
import Filter from "./Filter";
import { tags } from "../data/data-tags";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import FilterSort from "./FilterSort";

const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  top: 20%;
  left: 0;
`;
const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Filters() {
  const tagsList = tags;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter");

  function handleClick(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFiltersWrapper>
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
    </StyledFiltersWrapper>
  );
}

export default Filters;
