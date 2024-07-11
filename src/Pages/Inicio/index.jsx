import styled from "styled-components";
import GlobalStyled from "../../components/GlobalStyles";
import Header from "../../components/Header";
import Pie from "../../components/Pie";
import Banner from "../../components/Banner";
import Music from "../../components/CardMusic";

const BackColor = styled.div`
  background-color: var(--backColor);
  width: 100%;
  min-height: 100vh;
`;
const ContainerApp = styled.div`
  width: 1280px;
  min-width: 100%;
`;
const Main = styled.main`
  width: auto;
  height: 100vh;
  padding: 0 24px;
`;
const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const Inicio = () => {
  return (
    <>
      <BackColor>
        <GlobalStyled />
        <ContainerApp>
          <Header />
          <Banner />
          <Main>
            <Section>
              <Music />
            </Section>
          </Main>
          <Pie />
        </ContainerApp>
      </BackColor>
    </>
  );
};
export default Inicio;
