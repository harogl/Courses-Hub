export interface Courses {
    id: number;
    name: string;
    url: string;
    logo: string;
    description: string;
    categories: string[];
}

export const COURSES: Courses[] = [
    {
        id: 1,
        name: "Curso de JavaScript",
        url: "https://github.com/ing-manuel-rs/curso-javascript",
        logo: "/courseLogos/javascript.png",
        description: "Aprende JavaScript desde cero.",
        categories: ["Programación", "Frontend", "Backend"],
    },
    {
        id: 2,
        name: "Curso de React",
        url: "https://github.com/ing-manuel-rs/curso-react",
        logo: "/courseLogos/react.png",
        description: "Aprende React desde cero",
        categories: ["Programación", "Frontend"],
    },
    {
        id: 3,
        name: "Curso de React-native",
        url: "https://github.com/ing-manuel-rs/curso-react-native",
        logo: "/courseLogos/react-native.png",
        description:
            "Aprende a desarrollar aplicaciones móviles con React Native.",
        categories: ["Programación", "Frontend"],
    },
    {
        id: 4,
        name: "Curso de Node.js",
        url: "https://github.com/ing-manuel-rs/curso-nodejs",
        logo: "/courseLogos/node.png",
        description:
            "Introducción completa a Node.js, incluyendo módulos, NPM, Express.js, manejo de archivos, creación de APIs RESTful y más.",
        categories: ["Programación", "Backend"],
    },
    {
        id: 5,
        name: "Curso Tailwind CSS",
        url: "https://github.com/ing-manuel-rs/curso-tailwind",
        logo: "/courseLogos/tailwind.png",
        description:
            "Aprende a diseñar interfaces modernas y responsivas con Tailwind CSS.",
        categories: ["Programación", "Frontend"],
    },
    {
        id: 6,
        name: "Curso de TypeScript",
        url: "https://github.com/ing-manuel-rs/curso-typescript",
        logo: "/courseLogos/typescript.png",
        description: "Aprende TypeScript desde cero.",
        categories: ["Programación", "Frontend", "Backend"],
    },
    {
        id: 7,
        name: "Curso de markdown",
        url: "https://github.com/ing-manuel-rs/curso-markdown",
        logo: "/courseLogos/markdown.png",
        description:
            "Aprende a utilizar Markdown para documentar tus proyectos y tomar notas.",
        categories: ["Otros"],
    },
    {
        id: 8,
        name: "Curso de Git y GitHub",
        url: "https://github.com/ing-manuel-rs/notas-git-github",
        logo: "/courseLogos/git-github.webp",
        description:
            "Aprende a utilizar Git y GitHub para el control de versiones y la colaboración en proyectos.",
        categories: ["Otros"],
    },
    {
        id: 9,
        name: "Curso de Docker",
        url: "https://github.com/ing-manuel-rs/notas-docker",
        logo: "/courseLogos/docker.png",
        description:
            "Aprende a utilizar Docker para crear contenedores y gestionar aplicaciones en la nube.",
        categories: ["Programación", "Otros"],
    },
    {
        id: 10,
        name: "Curso de Next JS",
        url: "https://github.com/ing-manuel-rs/curso-next",
        logo: "/courseLogos/next.png",
        description: "Aprende a desarrollar aplicaciones web con Next.js.",
        categories: ["Programación", "Frontend", "Backend"],
    },
    {
        id: 11,
        name: "Curso de SQL",
        url: "https://github.com/ing-manuel-rs/curso-sql",
        logo: "/courseLogos/sql.png",
        description: "Aprende SQL desde cero.",
        categories: ["Base de Datos"],
    },
    {
        id: 12,
        name: "Curso NoSQL",
        url: "https://github.com/ing-manuel-rs/curso-sql",
        logo: "/courseLogos/no-sql.png",
        description: "Aprende NoSQL desde cero.",
        categories: ["Base de Datos"],
    },
    {
        id: 13,
        name: "Estructura de datos",
        url: "https://github.com/ing-manuel-rs/estructuras-de-datos",
        logo: "/courseLogos/estructuras-de-datos.png",
        description: "Aprende sobre estructuras de datos.",
        categories: ["Programación", "Backend"],
    },
    {
        id: 14,
        name: "Algoritmos",
        url: "https://github.com/ing-manuel-rs/algoritmos",
        logo: "/courseLogos/algoritmos.png",
        description: "Aprende sobre algoritmos y su complejidad.",
        categories: ["Programación", "Backend"],
    },
    {
        id: 15,
        name: "Patrones de diseño",
        url: "https://github.com/ing-manuel-rs/patrones_de_disenio",
        logo: "/courseLogos/patrones.png",
        description:
            "Aprende sobre patrones de diseño y su aplicación en el desarrollo de software.",
        categories: ["Otros"],
    },
    {
        id: 16,
        name: "Metodologías de desarrollo de software",
        url: "https://github.com/ing-manuel-rs/metodologias-de-desarrollo-de-software",
        logo: "/courseLogos/metodologias.png",
        description:
            "Aprende sobre metodologías de desarrollo de software y su aplicación en el desarrollo de software.",
        categories: ["Otros"],
    },
];
