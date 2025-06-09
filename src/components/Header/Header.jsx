import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar w-full flex justify-between items-center uppercase">
          <ul className={style.nav_link_list}>
            <NavLink className={style.nav_link} to="/">
              Home
            </NavLink>
            <NavLink className={style.nav_link} to="projects">
              Projects
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
