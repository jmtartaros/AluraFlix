import styled from "styled-components";
import BtnNav from "./Botones";

const Navbar = styled.nav`
  width: 100%;
  min-height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  /* background-color: var(--footer); */
`;

const Header = () => {
  return (
    <Navbar>
      <img src="img/LogoMain.png" alt="logo" />
      <BtnNav />
    </Navbar>
  );
};
export default Header;
