import { useState, useEffect } from "react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import BookIcon from "../assets/icons/book.svg?react";
import HamburguerIcon from "../assets/icons/hamburguerMenu.svg?react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const IconTheme = darkMode ? SunIcon : MoonIcon;

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className="w-full h-16 flex items-center justify-between px-6 bg-white dark:bg-blue-900 shadow-md sticky top-0 left-0 z-50">
            <div className="flex items-center gap-2 text-base dark:text-beige">
                <BookIcon className="size-8 text-blue-600 dark:text-yellow-400" />
                <p className="text-lg font-semibold">Courses Hub</p>
            </div>
            <div className="hidden md:flex items-center gap-16">
                <nav>
                    <ul className="flex gap-6 text-blue-950 dark:text-beige font-medium">
                        <li>
                            <a
                                href="/"
                                className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#categories"
                                className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                            >
                                Categorías
                            </a>
                        </li>
                        <li>
                            <a
                                href="#favorites"
                                className="hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                            >
                                Favoritos
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center size-8 rounded-md 
                               text-blue-950 dark:text-yellow-400 
                               hover:scale-110 hover:cursor-pointer hover:bg-light-gray 
                               dark:hover:bg-blue-800 
                               transition-all duration-300 ease-in-out transform"
                >
                    <IconTheme className="size-6" />
                </button>
            </div>
            <div className="flex md:hidden items-center gap-4">
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center size-8 rounded-md 
                               text-blue-950 dark:text-yellow-400 
                               hover:scale-110 hover:cursor-pointer hover:bg-light-gray 
                               dark:hover:bg-blue-800 
                               transition-all duration-300 ease-in-out transform"
                >
                    <IconTheme className="size-6" />
                </button>
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center size-8 rounded-md 
                               text-blue-950 dark:text-beige 
                               hover:scale-110 hover:cursor-pointer hover:bg-light-gray 
                               dark:hover:bg-blue-800 
                               transition-all duration-300 ease-in-out transform"
                >
                    <HamburguerIcon className="size-6" />
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-blue-900 shadow-md md:hidden">
                    <ul className="flex flex-col items-center text-blue-950 dark:text-beige font-medium py-1">
                        <li className="w-full flex items-center pl-3 border-b border-gray-300 hover:bg-blue-100 h-12 dark:hover:bg-blue-800">
                            <a
                                href="#"
                                className="w-full hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="w-full flex items-center pl-3 border-b border-gray-300 hover:bg-blue-100 h-12 dark:hover:bg-blue-800">
                            <a
                                href="#categories"
                                className="w-full hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Categorías
                            </a>
                        </li>
                        <li className="w-full flex items-center pl-3 border-b border-gray-300 hover:bg-blue-100 h-12 dark:hover:bg-blue-800">
                            <a
                                href="#favorites"
                                className="w-full hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Favoritos
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
