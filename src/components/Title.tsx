const Title = () => {
    return (
        <section className="h-[27.5rem] md:h-80 bg-gradient-to-tr from-orange-50 to-sky-50 py-12 dark:bg-gradient-to-tr dark:from-slate-900 dark:to-blue-900 flex flex-col items-center justify-center gap-4 text-blue-950 dark:text-beige">
            <h1 className="text-5xl md:text-6xl font-bold text-center">
                Aprende las tecnologías más demandadas
            </h1>
            <p className="text-md md:text-xl text-center">
                Explora nuestros cursos de programación, metodologías, patrones,
                algoritmos y más
            </p>
            <a
                href="#courses-list"
                className="mt-4 px-4 py-2 text-md md:text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
            >
                Explorar cursos
            </a>
        </section>
    );
};
export default Title;
