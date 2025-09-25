"use client";

import BookIcon from "../assets/icons/book.svg?react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-blue-950 text-gray-600 dark:text-gray-300 mt-12 border-t-2 border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 text-base dark:text-beige mb-3">
                        <BookIcon className="size-8 text-blue-600 dark:text-yellow-400" />
                        <p className="text-lg font-semibold">Courses Hub</p>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Encuentra y organiza los mejores cursos de programación,
                        frameworks, metodologías y más. Aprende a tu ritmo.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-blue-950 dark:text-white mb-3">
                        Califica los cursos ⭐
                    </h3>
                    <p>
                        Sí te han gustado y servido los cursos, por favor deja
                        tu estrellita en el repositorio
                    </p>
                </div>
            </div>

            {/* <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} CoursesHub. Todos los derechos
                reservados.
            </div> */}
        </footer>
    );
};

export default Footer;
