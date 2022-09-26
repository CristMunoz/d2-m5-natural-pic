import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";;
import Heart from "./Heart";

export default function Home() {
  const {photos, setPhotos} = useContext(Context);

  const setFavorito = (id) => {
    const photoIndex = photos.findIndex((ph) => ph.id === id);
    photos[photoIndex].liked = !photos[photoIndex].liked;
    setPhotos([...photos]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((e, ind) => (
        <div
          onClick={() => setFavorito(e.id)}
          className="photo"
          style={{backgroundImage:`url(${e.src})`}}
          key={ind}>
            <Heart filled={e.liked} />
            <p>{e.desc}</p>
        </div>
      ))}
    </div>
  );
}
