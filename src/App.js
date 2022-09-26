import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Context from "./Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [photos, setPhotos] = useState([]);

  const endpoint = "/fotos.json";

  const getNaturalPhotos = async () => {
    const res = await fetch(endpoint);
    let data = await res.json();
    let dataFiltered = data.photos.map((element) => ({
      id: element.id,
      src: element.src.tiny,
      desc: element.alt,
      liked: false
    }));
    setPhotos(dataFiltered);
  };

  useEffect(() => {
    getNaturalPhotos();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{photos, setPhotos}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
