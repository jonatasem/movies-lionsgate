import "./Header.scss";

import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <header className="container-header">
      <nav>
        <h1>LIONSGATE</h1>
        <ul>
          <li>
            <a href="">Best Movies</a>
          </li>
          <li className="list-salved">
            <a href="">Salved Lists</a>
            <p>0</p>
          </li>
        </ul>
      </nav>
      <div>
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
    </header>
  );
}
