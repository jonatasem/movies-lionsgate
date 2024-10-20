import React from "react";
import "./Carrossel.scss";

import imgMandalo from "../../assets/carrossel/mandalo.png";
import imgTeia from "../../assets/carrossel/teia.jpeg";
import imgBigMax from "../../assets/carrossel/bigmax.jpg";
import imgGhost from "../../assets/carrossel/ghostbusters.jpeg";
import imgKong from "../../assets/carrossel/godzillaxkong.jpeg";
import imgMarvels from "../../assets/carrossel/themarvels.jpg";
import imgStarWars from "../../assets/carrossel/starwars.png";

const AllImg = () => [
  imgMandalo,
  imgTeia,
  imgBigMax,
  imgGhost,
  imgKong,
  imgMarvels,
  imgStarWars,
];

export default function Carrossel() {
  const images = AllImg();

  return (
    <section className="container-carrossel">
      <div className="carrossel-images">
        {images.map((img, index) => (
          <img key={index} src={img} loading="lazy" alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
