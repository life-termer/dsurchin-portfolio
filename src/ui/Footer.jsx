import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-500);
  padding: 1.2rem 4.8rem;
  border-top: 1px solid var(--color-grey-900);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
