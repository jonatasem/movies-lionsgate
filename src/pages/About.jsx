import "./About.scss";
import MovieAbout from "../components/movie-about/MovieAbout";

import Header from "../components/header/Header";

export default function About() {
  return (
    <section className="container-about">
      <Header />
      <article>
        <h1>
          Welcome, <br />
          Travis
        </h1>
        <p>
          Thanks for viewing. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum quibusdam sed alias aliquid, tempora minima earum adipisci
          eveniet qui, sunt.
        </p>
      </article>
      <MovieAbout />
    </section>
  );
}
