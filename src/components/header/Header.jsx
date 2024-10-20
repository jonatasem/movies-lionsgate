import "./Header.scss";

import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  return (
    <header className="container-header">
      <nav>
        <h1>LIONSGATE</h1>
        <ul>
          <li className="best-movie-link">
            <a href="">Best Movies</a>
          </li>
          <li className="list-salved">
            <a href="">Salved Lists</a>
            <p>0</p>
          </li>
        </ul>
      </nav>
      <div className="menu-desktop">
        <span className="span-search">
          <input
            type="text"
            name="search-movie"
            id="search-movie"
            placeholder="Faça uma busca..."
          />
          <BiSearch className="icon" />
        </span>
        <span className="span-user">
          <input
            type="button"
            name="search-movie"
            id="search-movie"
            value="Login / Logout"
          />
        </span>
      </div>
      <div className="container-mobile">
        <BiMenu className="icon-mobile" />
      </div>
    </header>
  );
}
