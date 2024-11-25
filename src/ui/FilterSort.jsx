import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from "react-icons/fa";
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
      svg {
        color: var(--color-brand);
      }
    `}
  &:hover {
    color: var(--color-brand);
    cursor: pointer;
  }
  z-index: 10;
  transition: all 0.3s ease-out;
  svg {
    width: 1rem;
    height: auto;
  }
`;

function FilterSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterYear = searchParams.get("sortByYear");
  const currentFilterName = searchParams.get("sortByName");

  function handleSortByYearClick() {
    if (currentFilterYear === "dsc" || !currentFilterYear)
      searchParams.set("sortByYear", "asc");
    else searchParams.set("sortByYear", "dsc");
    setSearchParams(searchParams);
  }
  function handleSortByNameClick() {
    if (currentFilterName === "asc" || !currentFilterName)
      searchParams.set("sortByName", "dsc");
    else searchParams.set("sortByName", "asc");
    setSearchParams(searchParams);
  }

  return (
    <>
      <StyledFilter
        $isActive={currentFilterYear}
        onClick={handleSortByYearClick}
      >
        {searchParams.get("sortByYear") === "asc" ||
        !searchParams.get("sortByYear") ? (
          <FaSortNumericDown />
        ) : (
          <FaSortNumericDownAlt />
        )}
        Year
      </StyledFilter>
      <StyledFilter
        $isActive={currentFilterName}
        onClick={handleSortByNameClick}
      >
        {searchParams.get("sortByName") === "asc" ||
        !searchParams.get("sortByName") ? (
          <FaSortAlphaDown />
        ) : (
          <FaSortAlphaDownAlt />
        )}
        Name
      </StyledFilter>
    </>
  );
}

export default FilterSort;
