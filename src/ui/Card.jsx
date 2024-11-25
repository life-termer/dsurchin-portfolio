import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  --backdrop: var(--color-grey-400);
  --radius: 14;
  --border: 2;
  --size: 350;
  --base: 80;
  --spread: 100;
  --outer: 1;
  --border-size: calc(var(--border, 2) * 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px) invert(3%);
  transition: height 0.5s ease-in-out, width 0.5s linear;
  border: var(--border-size) solid var(--color-grey-400);
  @media (min-width: 1200px) {
    &[data-glow] {
      --spotlight-size: calc(var(--size, 150) * 1px);
      --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
      background-color: var(--background, transparent);
      background-size: calc(100% + (2 * var(--border-size)))
        calc(100% + (2 * var(--border-size)));
      background-position: 50% 50%;
      background-attachment: fixed;

      &::before,
      &::after {
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        /* border-radius: calc(var(--radius) * 1px); */
        backdrop-filter: blur(3px) invert(3%);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--border-size)))
          calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        mask: linear-gradient(transparent, transparent),
          linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
      &::before {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75)
            at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
          var(--color-brand),
          transparent 100%
        );
        filter: brightness(1);
      }
    }
  }
  ${(props) =>
    props.type === "home" &&
    css`
      text-transform: uppercase;
      position: absolute;
      width: 50%;
      height: 50%;
      flex-direction: column;
      gap: 1rem;
      padding: 0 10px;
      &:hover {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          cursor: pointer;
          text-shadow: var(--color-brand) 1px 0 2px;
        }
      }

      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
      }
      &:nth-child(1) {
        border-right: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-bottom: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(2) {
        border-left: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-bottom: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(3) {
        border-top: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-right: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(4) {
        border-left: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-top: calc(var(--border-size) / 2) solid var(--color-grey-400);
        &:hover {
          cursor: pointer;
        }
      }
      ${(props) =>
        props.$active &&
        css`
          * {
            /* color: var(--color-grey-900); */
            color: var(--color-brand);
            text-shadow: var(--color-brand) 1px 0 3px;
          }
          &:hover,
          &.active {
            cursor: auto;
          }
        `}
    `}
  ${(props) =>
    props.type === "home" &&
    props.$page != "/" &&
    css`
      flex-direction: row;
      border-right: calc(var(--border-size)) solid var(--color-grey-400);
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        cursor: pointer;
        color: var(--color-grey-800);
        text-shadow: var(--color-brand) 1px 0 3px;
      }
    `}
  ${(props) =>
    props.type === "home" &&
    props.$page === "/" &&
    css`
      @media (max-width: 900px) {
        border: calc(var(--border-size)) solid var(--color-grey-400) !important;
        &:not(:nth-child(3)) {
          border-bottom: none !important;
        }
      }
    `}
  ${(props) =>
    (props.type === "filter" || props.type === "filter-2") &&
    css`
      padding: 10px 12px;
      min-width: 210px;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-left: 6px;
      }
      @media (max-width: 750px) {
        padding: 10px 0;
      }
    `}
  ${(props) =>
    props.type === "filter-2" &&
    css`
      @media (max-width: 750px) {
        overflow-x: clip;
        overflow-y: auto;
        flex-grow: 1;
        align-items: flex-start;
      }
    `}
  ${(props) =>
    props.type === "project" &&
    css`
      width: 100%;
      height: 100%;
    `}
  ${(props) =>
    props.type === "contact" &&
    css`
      perspective: 1000px;
    `}
  ${(props) =>
    props.disabled &&
    css`
      * {
        color: var(--color-grey-900);
      }
      &:hover,
      &.active {
        cursor: auto;
      }
    `}
`;

function Card({ type, link, disabled, children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <StyledCard
      type={type}
      disabled={disabled}
      data-glow={true}
      $page={pathname}
      $active={link === pathname}
      onClick={() => {
        if (link) navigate(link);
        // setTimeout(() => {
        //   navigate(link);
        // }, 300);
      }}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
