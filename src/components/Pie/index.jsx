import styled from "styled-components";

const PieStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 125px;
  background-color: var(--footer);
`;
const Pie = () => {
  return (
    <PieStyled>
      <img src="img/LogoMain.png" alt="Logo" />
    </PieStyled>
  );
};
export default Pie;
