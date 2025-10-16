import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header
            className={`header ${
                isOpen ? "bg-(--color-bg-medium)" : ""
            } transition-all duration-300 ease-in-out`}
        >
            <div className="container mx-auto px-4 text-xl md:text-2xl ">
                <nav className="flex items-center justify-between py-6 w-full z-50">
                    {/* Logo a sinistra */}
                    <a href="/" className="font-bold">
                        <span className="logo">&gt;_ntnrss</span>
                    </a>

                    {/* mobile hamburger menu*/}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
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
                    <ul className="md:hidden flex flex-col gap-4 mt-2 pb-5 transition-all duration-1000 ease-in-out">
                        <li>
                            <NavLink
                                to="/"
                                className="nav_link block sm:py-2 md:py-0 border-b"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className="nav_link block sm:py-2 md:py-0 border-b"
                            >
                                Progetti
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}
