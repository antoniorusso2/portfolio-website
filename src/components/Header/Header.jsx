import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar h-16 w-full flex justify-center items-center uppercase pt-5 text-[var(--primary-color)] border-b border-[var(--primary-color)] py-5">
          <ul className="flex gap-5 items-center">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/projects">
              Projects
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
