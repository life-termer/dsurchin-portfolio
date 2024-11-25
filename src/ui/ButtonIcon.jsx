import styled from "styled-components";

const ButtonIcon = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    svg {
      filter: drop-shadow(0 0 2px var(--color-brand-hover));
    }
  }

  svg {
    width: 100%;
    height: auto;
    color: var(--color-brand);
    filter: drop-shadow(0 0 10px var(--color-brand));
    transition: all 0.3s ease-out;
  }
`;

export default ButtonIcon;
