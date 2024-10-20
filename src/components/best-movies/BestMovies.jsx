import "./BestMovies.scss";

import ApiMovies from "../../api/ApiMovies";

export default function BestMovies() {
  return (
    <section className="container-best-movies">
      <h1>Best Movies</h1>
      <article>
        <ul>
          {ApiMovies.map((movie, index) => (
            <li key={index}>
              <p>{movie.name}</p>
              <img src={movie.img} alt={`Imagem do filme ${movie.name}`} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
