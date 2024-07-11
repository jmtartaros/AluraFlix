import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const Sectionvideo = styled.section`
  display: flex;
  width: 320px;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 320px;
    height: 220px;
  }
`;

const videoLocal = ({ video }) => {
  return (
    <>
      <Sectionvideo>
        <Link to={video.url}>
          <img src={video.img} alt={video.title} />
        </Link>
        <h5>video {video.title} </h5>
      </Sectionvideo>
    </>
  );
};
export default videoLocal;
