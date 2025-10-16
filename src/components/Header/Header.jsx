import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Progetti", to: "/projects" },
    ];

    return (
        <header className="bg-[var(--color-nav-bg)] backdrop-blur-sm shadow-sm w-full transition-all duration-300 ease-in-out text-xl md:text-2xl">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4 md:py-6">
                    {/* Logo */}
                    <a
                        href="/"
                        className="font-bold text-[var(--color-text-primary)] text-xl md:text-2xl"
                    >
                        &gt;_ntnrss
                    </a>

                    {/* Desktop menu */}
                    <ul className="hidden md:flex md:gap-6">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `relative flex items-center gap-2 ps-6 py-1 text-[var(--color-text-secondary)] transition-colors duration-300 ${
                                            isActive
                                                ? "text-[var(--color-accent-blue)] opacity-100"
                                                : "opacity-60 hover:text-[var(--color-accent-blue)] hover:opacity-100"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Icon before text if active */}
                                            {isActive && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[23px] bg-[url('/22-22-play-retro.png')] bg-contain bg-no-repeat drop-shadow-[1px_1px_1px_var(--color-glow)] pointer-events-none"></span>
                                            )}
                                            {link.name}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-[var(--color-text-primary)] cursor-pointer"
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
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-4 mt-2 pb-5 transition-all duration-500 ease-in-out">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `block ps-6 py-2 text-[var(--color-text-secondary)] border-b border-[rgba(72,149,239,0.2)] transition-colors duration-300 ${
                                            isActive
                                                ? "text-[var(--color-accent-blue)] opacity-100"
                                                : "opacity-60 hover:text-[var(--color-accent-blue)] hover:opacity-100"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {isActive && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[23px] bg-[url('/22-22-play-retro.png')] bg-contain bg-no-repeat drop-shadow-[1px_1px_1px_var(--color-glow)] pointer-events-none"></span>
                                            )}
                                            {link.name}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
}
