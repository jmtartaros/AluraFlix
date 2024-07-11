import styled from "styled-components";

const CardStyles = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  z-index: 3;
`;
const TituloStyles = styled.h1`
  font-size: 46px;
  color: #fff;
  font-weight: 500;
`;
const TextoStyles = styled.p`
  font-size: 18px;
  color: #fff;
`;

const Card = () => {
  return (
    <CardStyles>
      <TituloStyles>Challeng React</TituloStyles>

      <TextoStyles>
        ¡Sumérgete en el Mundo de la Música! Descubre, Escucha y Disfruta
        Explora Nuestra Colección Musical Agrega tu Música Favorita
      </TextoStyles>
    </CardStyles>
  );
};
export default Card;
