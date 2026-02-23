import { useId } from 'react';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import "react-lazy-load-image-component/src/effects/opacity.css";

const StyledWorkCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  z-index: 20;
  .react-tooltip {
    font-size: 0.8rem;
    background-color: var(--color-grey-800);
    color: var(--color-grey-200);
  }
  &:hover {
    img {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
      box-shadow: 0px 2px 3px var(--backdrop-color-brand);
      filter: grayscale(0);
    }
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* perspective: 1000px; */
  .lazy-load-image-background {
    display: block;
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s linear;
    object-position: top;
    transform: rotateX(15deg) rotateY(-5deg) rotateZ(1deg) scale(0.86);
    box-shadow: 5px 5px 2px var(--backdrop-color-brand);
    transition: 2s;
    transform-origin: 50% 10%;
    will-change: transform;
    filter: grayscale(70%);
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
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Tag = styled.div`
  border: 1px solid var(--color-brand);
  border-radius: 4px;
  width: 36px;
  height: 36px;
  padding: 4px;
  backdrop-filter: blur(10px);
  background-color: var(--backdrop-color);
`;
const GitHubBtn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: pointer;
  }
`;
const LinkBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  &:hover {
    cursor: pointer;
  }
`;

function WorkCard({ project }) {
  const { name, year, mainImage, tags, link, id, github } = project;
    const reactId = useId();
    const gitId = `${id}-git-${reactId}`;
  // const placeholderImg = `${img.at(0)}-sm.${img.at(1)}`;
  function handleClick(link) {
    window.open(link, "_blank").focus();
  }

  return (
    <StyledWorkCard className={link ? "has-link" : ""}>
      <ImageWrapper>
        <LazyLoadImage
          src={mainImage}
          // width={400}
          width="100%"
          height={500}
          // placeholderSrc={placeholderImg}
          alt={mainImage}
          effect="opacity"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "0.25s", transitionDuration: "1s" },
          }}
        />
      </ImageWrapper>
      <Heading>
        <h4>{name}</h4>
        <h4>{year}</h4>
      </Heading>
      <Tags>
        {tags.map((tag) => {
          const { icon: Icon, id, name } = tag;
            const rId = `${id}-tag-${reactId}`;
          return (
            <Tag key={id}>
              <Icon data-tooltip-id={rId} data-tooltip-content={name} />
              <Tooltip id={rId} />
            </Tag>
          );
        })}
      </Tags>
      {github ? (
        <GitHubBtn onClick={() => handleClick(github)}>
          <Tag>
            <FaGithub data-tooltip-id={gitId} data-tooltip-content="GitHub" />
            <Tooltip id={gitId} />
          </Tag>
        </GitHubBtn>
      ) : (
        ""
      )}
      {link ? (
        <LinkBtn onClick={() => handleClick(link)}>
          <Tag>
            <FiExternalLink />
          </Tag>
        </LinkBtn>
      ) : (
        ""
      )}
    </StyledWorkCard>
  );
}

export default WorkCard;
