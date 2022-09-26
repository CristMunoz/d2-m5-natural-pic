import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const {photos, setPhotos} = useContext(Context);

  const borrarFavorito = (id) => {
    const photoIndex = photos.findIndex((ele) => ele.id === id);
    photos[photoIndex].liked = !photos[photoIndex].liked;
    setPhotos([...photos]);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {photos
       .filter((element) => element.liked)
       .map((element, ind) => (
        <img
          src={element.src}
          alt=""
          onClick={() => borrarFavorito(element.id)}
          key={ind} />
       ))}
      </div>
    </div>
  );
}
