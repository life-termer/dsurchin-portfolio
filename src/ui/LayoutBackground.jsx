import styled, { css } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    z-index: 1;
    ${(props) =>
      props.$isDarkMode
        ? css`
            background-image: url("/bg-tile-dark.svg");
          `
        : css`
            background-image: url("/bg-tile.svg");
          `}
    background-position: 50% 0;
    background-size: 142px 71px;
    background-repeat: repeat;
  }
`;

function LayoutBackground({ background }) {
  const { isDarkMode } = useDarkMode();

  return (
    <BackgroundWrapper>
      <Background $isDarkMode={isDarkMode} ref={background} />
    </BackgroundWrapper>
  );
}

export default LayoutBackground;
