import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar w-full flex justify-end items-center uppercase pt-5 text-[var(--primary-color)]">
          <ul className="flex gap-5 items-center">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="projects">
              Projects
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
