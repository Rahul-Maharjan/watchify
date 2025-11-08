import React from "react";

/**
 * MovieCard
 * Props:
 * - image: string (poster URL)
 * - title: string
 * - description: string
 * - duration: string (e.g. "1h 45m")
 * - releaseDate: string (e.g. "2024")
 * - isFavorite: boolean
 * - onToggleFavorite: function
 */
const MovieCard = ({
  image = "",
  title = "Untitled",
  description = "",
  duration = "",
  releaseDate = "",
  isFavorite = false,
  onToggleFavorite = () => {},
}) => {
  return (
    <article className="group relative w-full max-w-xs bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-250 ease-out">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover bg-gray-100"
        />

        {/* favorite button */}
        <button
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 z-10 inline-flex items-center justify-center p-2 rounded-full bg-white/90 dark:bg-gray-800/80 backdrop-blur hover:scale-105 transform transition"
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 text-gray-700 dark:text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.172 5.172a4 4 0 015.656 0L12 8.344l3.172-3.172a4 4 0 115.656 5.656L12 21.344 3.172 10.828a4 4 0 010-5.656z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3
          className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate"
          title={title}
        >
          {title}
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-300 max-h-12 overflow-hidden">
          {description}
        </p>

        <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{duration}</span>
          <span className="ml-2">{releaseDate}</span>
        </div>
      </div>

      {/* subtle hover effect: slight lift */}
      <style>{`
        .group:hover { transform: translateY(-4px); }
        .group { transition: transform 200ms ease, box-shadow 200ms ease; }
      `}</style>
    </article>
  );
};

export default MovieCard;
