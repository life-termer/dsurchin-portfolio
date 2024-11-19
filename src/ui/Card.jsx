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
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid var(--color-grey-300); */
  backdrop-filter: blur(3px) invert(3%);
  transition: height 0.7s 0.3s ease-in-out, width 0.7s 0.3s ease-in-out;
  border: var(--border-size) solid var(--color-grey-400);

  &[data-glow] {
    --border-size: calc(var(--border, 2) * 1px);
    --spotlight-size: calc(var(--size, 150) * 1px);
    --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
    /* background-image: radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
      var(--color-brand),
      transparent
    ); */
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
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
          calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
        var(--color-brand),
        transparent 100%
      );
      filter: brightness(1);
    }
  }

  ${(props) =>
    props.type === "home" &&
    css`
      text-transform: uppercase;
      position: absolute;
      width: 50%;
      height: 50%;
      &:hover {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          text-shadow: var(--color-brand) 1px 0 3px;
        }
      }
      &:nth-child(1) {
        top: 0;
        left: 0;
        border-right: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-bottom: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
        border-left: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-bottom: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        border-top: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-right: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
        border-left: calc(var(--border-size) / 2) solid var(--color-grey-400);
        border-top: calc(var(--border-size) / 2) solid var(--color-grey-400);
      }
      &:hover {
        cursor: pointer;
      }
      ${(props) =>
        props.$active &&
        css`
          * {
            opacity: 0.5;
          }
          &:hover,
          &.active {
            cursor: auto;
          }
        `}
    `}

  ${(props) =>
    props.type === "filter" &&
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
    `}
  ${(props) =>
    props.type === "project" &&
    css`
      width: 100%;
      height: 100%;
    `}
  ${(props) =>
    props.disabled &&
    css`
      * {
        opacity: 0.5;
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
      $active={link === pathname}
      onClick={() => {
        if (link)
          setTimeout(() => {
            navigate(link);
          }, 300);
      }}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
