"use client";

import { useState, useEffect, useMemo } from "react";
import CourseCard from "./CourseCard";
import { COURSES } from "../utils/courseRepository";

type ViewMode = "grid" | "list";
type SortOption = "name" | "category" | "favorites";

const CoursesList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [sortBy, setSortBy] = useState<SortOption>("name");
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem("courseFavorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save favorites to localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem("courseFavorites", JSON.stringify(favorites));
    }, [favorites]);

    // Toggle favorite status
    const toggleFavorite = (courseId: number) => {
        setFavorites((prev) =>
            prev.includes(courseId)
                ? prev.filter((id) => id !== courseId)
                : [...prev, courseId]
        );
    };

    // Get unique categories
    const categories = useMemo(() => {
        const allCategories = COURSES.flatMap((course) => course.categories);
        return [...new Set(allCategories)];
    }, []);

    // Filter and sort courses
    const filteredAndSortedCourses = useMemo(() => {
        const filtered = COURSES.filter((course) => {
            const matchesSearch =
                course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                course.categories.some((cat) =>
                    cat.toLowerCase().includes(searchTerm.toLowerCase())
                );

            const matchesCategory =
                selectedCategory === "all" ||
                course.categories.includes(selectedCategory);

            const matchesFavorites =
                !showFavoritesOnly || favorites.includes(course.id);

            return matchesSearch && matchesCategory && matchesFavorites;
        });

        // Sort courses
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "category":
                    return (
                        a.categories[0]?.localeCompare(b.categories[0] || "") ||
                        0
                    );
                case "favorites":
                    const aIsFav = favorites.includes(a.id);
                    const bIsFav = favorites.includes(b.id);
                    if (aIsFav && !bIsFav) return -1;
                    if (!aIsFav && bIsFav) return 1;
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [searchTerm, selectedCategory, showFavoritesOnly, favorites, sortBy]);

    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash === "#favorites") {
                setShowFavoritesOnly(true);

                window.history.replaceState(
                    null,
                    "",
                    window.location.pathname + window.location.search
                );
            }
        };

        handleHash();

        window.addEventListener("hashchange", handleHash);

        return () => {
            window.removeEventListener("hashchange", handleHash);
        };
    }, []);

    return (
        <section className="w-full py-12 px-4 md:px-8" id="courses-list">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-base dark:text-white">
                        Catálogo de Cursos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
                        Descubre nuestra colección de cursos de tecnología
                        diseñados para impulsar tu carrera
                    </p>
                </div>

                {/* Filters and Controls */}
                <div className="mb-8 space-y-4 scroll-m-24" id="categories">
                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Buscar cursos por nombre, descripción o categoría..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border-2 rounded-xl border-blue px-4 py-3 pl-12 focus:outline-none focus:border-blue-500 transition-all dark:text-white "
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                🔍
                            </div>
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="px-4 py-2 rounded-lg focus:ring-blue-500 focus:outline-blue-500 focus:outline-none focus:ring-2 bg-beige dark:bg-blue dark:text-white cursor-pointer"
                            >
                                <option value="all">
                                    Todas las categorías
                                </option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            {/* Sort Options */}
                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(e.target.value as SortOption)
                                }
                                className="px-4 py-2 rounded-lg focus:ring-blue-500 focus:outline-blue-500 focus:outline-none focus:ring-2 bg-beige dark:bg-blue dark:text-white cursor-pointer"
                            >
                                <option value="name">Ordenar por nombre</option>
                                <option value="category">
                                    Ordenar por categoría
                                </option>
                                <option value="favorites">
                                    Favoritos primero
                                </option>
                            </select>

                            {/* Favorites Toggle */}
                            <button
                                onClick={() =>
                                    setShowFavoritesOnly(!showFavoritesOnly)
                                }
                                className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                                    showFavoritesOnly
                                        ? "text-white"
                                        : "text-current border-2"
                                }`}
                                style={{
                                    backgroundColor: showFavoritesOnly
                                        ? "#95A5E4"
                                        : "transparent",
                                    borderColor: showFavoritesOnly
                                        ? "#95A5E4"
                                        : "#95A5E4",
                                    color: showFavoritesOnly
                                        ? "white"
                                        : "#95A5E4",
                                }}
                            >
                                {showFavoritesOnly
                                    ? "❤️ Solo favoritos"
                                    : "🤍 Mostrar favoritos"}
                            </button>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 p-1 rounded-lg bg-beige dark:bg-blue-100">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-3 py-2 rounded-md transition-all ${
                                    viewMode === "grid"
                                        ? "text-white"
                                        : "text-gray-600"
                                }`}
                                style={{
                                    backgroundColor:
                                        viewMode === "grid"
                                            ? "#677BB7"
                                            : "transparent",
                                }}
                            >
                                ⊞
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`px-3 py-2 rounded-md transition-all ${
                                    viewMode === "list"
                                        ? "text-white"
                                        : "text-gray-600"
                                }`}
                                style={{
                                    backgroundColor:
                                        viewMode === "list"
                                            ? "#677BB7"
                                            : "transparent",
                                }}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Counter */}
                <div className="mb-6 text-center">
                    <p className="text-gray-600 dark:text-zinc-300">
                        Mostrando {filteredAndSortedCourses.length} de{" "}
                        {COURSES.length} cursos
                        {favorites.length > 0 && (
                            <span
                                className="ml-2 px-2 py-1 text-xs rounded-full"
                                style={{
                                    backgroundColor: "#FFF3DB",
                                    color: "#1A2554",
                                }}
                            >
                                {favorites.length} favoritos
                            </span>
                        )}
                    </p>
                </div>

                {/* Courses Grid/List */}
                {filteredAndSortedCourses.length > 0 ? (
                    <div
                        className={`
                        ${
                            viewMode === "grid"
                                ? "grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                : "flex flex-col gap-4 items-center"
                        }
                    `}
                    >
                        {filteredAndSortedCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                {...course}
                                isFavorite={favorites.includes(course.id)}
                                onToggleFavorite={toggleFavorite}
                                viewMode={viewMode}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📚</div>
                        <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "#1A2554" }}
                        >
                            No se encontraron cursos
                        </h3>
                        <p className="text-gray-600">
                            Intenta ajustar tus filtros de búsqueda
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CoursesList;
