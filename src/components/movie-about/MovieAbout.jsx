import "./MovieAbout.scss";

import imgMandalo from "../../assets/movie-about/mandalo.png";

import imgTeia from "../../assets/movie-about/teia.jpeg";

export default function MovieAbout() {
  return (
    <section className="movie-about">
      <article>
        <img src={imgMandalo} alt="mandaloriano" />
      </article>
      <article>
        <img src={imgTeia} alt="madame teia" />
      </article>
    </section>
  );
}
