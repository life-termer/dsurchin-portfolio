import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";

const StyledDarkModeToggle = styled.div`
  position: fixed;
  right: 25px;
  width: 40px;
  height: 40px;
  bottom: 45px;
  /* border: 1px solid var(--color-grey-300); */
  z-index: 999;
  @media (max-width: 750px) {
    right: 10px;
    bottom: 38px;
  }
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <StyledDarkModeToggle>
      <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
    </StyledDarkModeToggle>
  );
}

export default DarkModeToggle;
