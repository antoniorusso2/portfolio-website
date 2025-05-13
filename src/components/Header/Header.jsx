import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container mx-auto">
          <ul className={style.nav_link_list}>
            <NavLink className={style.nav_link} to="/">
              Home
            </NavLink>
            <NavLink className={style.nav_link} to="projects">
              Projects
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
