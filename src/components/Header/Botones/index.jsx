import styled from "styled-components";

const DivContainer = styled.div`
  width: 385.5px;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 180.4px;
  height: auto;
  border: 1px solid #fff;
  border-radius: 25px;
  background-color: var(--backColor);
  color: #fff;
  &:nth-of-type(2) {
    border: 1px solid blue;
    color: blue;
    font-weight: 700;
    box-shadow: inset 0 0 18px rgba(0, 0, 255, 0.8);
  }
`;

const BtnNav = () => {
  return (
    <DivContainer>
      <Btn>Home</Btn>
      <Btn>Nuevo Video</Btn>
    </DivContainer>
  );
};
export default BtnNav;
