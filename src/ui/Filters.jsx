import styled, { css } from "styled-components";
import Filter from "./Filter";
import { tags } from "../data/data-tags";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import FilterSort from "./FilterSort";
import { useEffect, useRef, useState } from "react";
import { LuFilter, LuFilterX } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AiOutlineClose } from "react-icons/ai";

const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  top: 150px;
  height: auto;
  max-height: calc(100vh - 200px);
  min-height: 200px;
  left: 0;
  transform: translate(-100%);
  transition: transform 0.3s ease-out;
  opacity: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
  ${(props) =>
    props.$active &&
    css`
      transform: translate(0);
    `}
  @media (max-width: 750px) {
    top: 130px;
    left: 0;
    max-height: calc(100dvh - 200px);
  }
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
  @media (max-width: 750px) {
    top: 50%;
  }
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.$active &&
    css`
      transform: translate(50%, -50%);
    `}
  ${(props) =>
    props.type === "clear" &&
    css`
      top: 46px;
      @media (max-width: 750px) {
        top: calc(50% + 46px);
      }
    `}
`;

function Filters() {
  const tagsList = tags.sort((a, b) => a.name > b.name ? 1 : -1);;
  const tagsListSorted = tagsList.sort((a, b) => a.name > b.name ? 1 : -1);
  const filters = useRef();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [active, setActive] = useState(matches);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter");
  function handleClick(value) {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }
  function handleClearFilters() {
    if (searchParams.has("filter")) {
      searchParams.delete("filter");
      setSearchParams(searchParams);
    }
    if (searchParams.has("sortByName")) {
      searchParams.delete("sortByName");
      setSearchParams(searchParams);
    }
    if (searchParams.has("sortByYear")) {
      searchParams.delete("sortByYear");
      setSearchParams(searchParams);
    }
  }
  let filtersTimeline = new gsap.timeline();
  useGSAP(
    () => {
      filtersTimeline
        .to(filters.current, { display: "flex" })
        .to(filters.current, {
          opacity: 1,
          delay: 1.5,
          duration: 0.5,
          ease: "power1.out",
        });
    },
    { scope: filters }
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    setActive(matches);
  }, [matches]);

  return (
    <StyledFiltersWrapper ref={filters} $active={active}>
      <Card type="filter">
        <StyledFilters>
          <h6>Sort By</h6>
          <FilterSort />
        </StyledFilters>
      </Card>
      <Card type="filter-2">
        <StyledFilters>
          {tagsListSorted.map((tag) => {
            return (
              tag.name != "JavaScript" && tag.name != "CSS" && (
                <Filter
                  key={tag.name}
                  tag={tag}
                  isActive={tag.name === currentFilter}
                  onClick={() => handleClick(tag.name)}
                />
              )
            );
          })}
        </StyledFilters>
      </Card>
      <FiltersButton
        type="close"
        $active={active}
        onClick={() => setActive((a) => !a)}
      >
        {active ? <AiOutlineClose /> : <LuFilter />}
      </FiltersButton>
      {searchParams.size ? (
        <FiltersButton
          type="clear"
          $active={active}
          onClick={handleClearFilters}
        >
          <LuFilterX />
        </FiltersButton>
      ) : (
        ""
      )}
    </StyledFiltersWrapper>
  );
}

export default Filters;
