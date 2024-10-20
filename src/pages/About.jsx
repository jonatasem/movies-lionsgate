import "./About.scss";
import Header from "../components/header/Header";
import Carrossel from "../components/carrossel/Carrossel";

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
      <Carrossel />
    </section>
  );
}
