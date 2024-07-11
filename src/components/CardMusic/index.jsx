import styled from "styled-components";
import { useEffect, useState } from "react";
import VideosLocal from "../../Pages/Videos";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Music = () => {
  const [videos, setVideo] = useState([]);
  const apiSong =
    "https://my-json-server.typicode.com/jmtartaros/apiSong/canciones";

  useEffect(() => {
    const fectData = async () => {
      try {
        const res = await fetch(apiSong);
        if (!res.ok) throw new Error("No se que sucedio");
        const data = await res.json();
        setVideo(data);
      } catch (error) {
        console.log("idontknow", error);
      }
    };
    fectData();
  }, []);
  return (
    <CardContainer>
      {videos.map((video) => {
        return <VideosLocal key={video.id} video={video} />;
      })}
    </CardContainer>
  );
};
export default Music;
