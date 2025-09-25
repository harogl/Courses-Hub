"use client";

interface Props {
    id: number;
    name: string;
    url: string;
    logo: string;
    description: string;
    categories: string[];
    isFavorite?: boolean;
    viewMode?: "grid" | "list";
    onToggleFavorite?: (id: number) => void;
}

const CourseCard = (props: Props) => {
    const { viewMode = "grid" } = props;

    return (
        <div
            id={`course-${props.id}`}
            className={`
                bg-white dark:bg-gray-600/40 dark:text-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg 
                transition-all duration-300 hover:-translate-y-1 overflow-hidden min-w-96
                ${
                    viewMode === "list"
                        ? "flex flex-row items-center p-4 gap-4 w-[620px]"
                        : "flex flex-col p-6 w-72 min-h-[420px]"
                }
            `}
            style={{ borderColor: "#DDE3E4" }}
        >
            {/* Logo/Icon Section */}
            <div
                className={`
                    flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-transparent drop-shadow-xl drop-shadow-zinc-400
                    ${
                        viewMode === "list"
                            ? "size-28 flex-shrink-0"
                            : "w-full h-32 mb-4"
                    }
                `}
            >
                <img
                    src={props.logo}
                    alt={`${props.name} logo`}
                    className="w-full h-full object-contain p-3"
                />
            </div>

            {/* Content Section */}
            <div
                className={`${
                    viewMode === "list" ? "flex-1" : "flex-1 flex flex-col"
                }`}
            >
                <div
                    className={`${
                        viewMode === "list"
                            ? "flex justify-between items-start"
                            : ""
                    }`}
                >
                    <div
                        className={`${
                            viewMode === "list" ? "flex-1 pr-4" : ""
                        }`}
                    >
                        <h2 className="text-lg font-bold mb-2 text-center text-[#1A2554] dark:text-white">
                            {props.name}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-4 dark:text-gray-300">
                            {props.description}
                        </p>
                    </div>

                    {/* Categories */}
                    <div
                        className={`flex flex-wrap gap-2 mb-4 justify-center ${
                            viewMode === "list" ? "flex-shrink-0" : ""
                        }`}
                    >
                        {props.categories.map((category) => (
                            <span
                                key={category}
                                className="px-3 py-1 text-xs font-medium rounded-full"
                                style={{
                                    backgroundColor: "#FFF3DB",
                                    color: "#1A2554",
                                }}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div
                    className={`flex gap-3 mt-auto ${
                        viewMode === "list" ? "flex-col" : "flex-col"
                    }`}
                >
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 text-center text-white font-medium rounded-lg 
                                 hover:opacity-90 transition-opacity duration-200"
                        style={{ backgroundColor: "#1A2554" }}
                    >
                        Ir al curso
                    </a>
                    <button
                        className={`px-4 py-2 font-medium rounded-lg border-2 transition-all duration-200 cursor-pointer
                                  ${
                                      props.isFavorite
                                          ? "text-white border-transparent"
                                          : "border-current hover:text-white"
                                  }`}
                        style={{
                            backgroundColor: props.isFavorite
                                ? "#95A5E4"
                                : "transparent",
                            color: props.isFavorite ? "white" : "#95A5E4",
                            borderColor: props.isFavorite
                                ? "#95A5E4"
                                : "#95A5E4",
                        }}
                        onMouseEnter={(e) => {
                            if (!props.isFavorite) {
                                e.currentTarget.style.backgroundColor =
                                    "#95A5E4";
                                e.currentTarget.style.color = "black";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!props.isFavorite) {
                                e.currentTarget.style.backgroundColor =
                                    "transparent";
                                e.currentTarget.style.color = "#95A5E4";
                            }
                        }}
                        onClick={() => props.onToggleFavorite?.(props.id)}
                    >
                        {props.isFavorite ? "❤️ Favorito" : "🤍 Favorito"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
