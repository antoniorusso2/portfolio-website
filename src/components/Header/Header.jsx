import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      {/* <div className="navbar container fixed top-0 left-1/2 w-full translate-x-[-50%]">
        <nav className="w-full flex justify-between items-center uppercase pt-5 text-[var(--primary-color)] border-b border-[var(--primary-color)] py-5">
          <div className="logo">
            <a className="w-full block" href="/">
              <span className="logo opacity-100 text-xl">NTN-RSS</span>
            </a>
          </div>
          <ul
            className={`md:flex md:gap-4 transition-all duration-500 h-0 overflow-hidden md:h-auto ${
              isOpen ? "h-50" : ""
            }`}
          >
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/projects">
              Progetti
            </NavLink>
          </ul>
          <button className="menu_btn md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </i>
          </button>
        </nav>
      </div> */}

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6 w-full z-50">
          {/* Logo a sinistra */}
          <a href="/" className="text-xl font-bold">
            NTN-RSS
          </a>

          {/* Bottone hamburger solo su mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex md:gap-6">
            <li>
              <NavLink to="/" className="nav_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav_link">
                Progetti
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Menu mobile (tendina sotto il nav) */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-2 px-4">
            <li>
              <NavLink to="/" className="nav_link block py-2 border-b">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav_link block py-2 border-b">
                Progetti
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
