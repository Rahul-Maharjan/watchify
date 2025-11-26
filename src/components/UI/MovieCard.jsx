import React from "react";

const MovieCard = ({
  // default poster — put your image in public/poster-default.jpg
  image = "/poster-default.jpg",
  // optional thumbnail; if empty we'll reuse the poster
  thumb = "",
  title = "Untitled",
  length = "0:00",
  lang = "Eng",
  rating = "0.0",
  reviews = "0+",
}) => {
  const poster = image || "/poster-default.jpg";
  const small = thumb || poster;

  return (
    <article className="relative w-72 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* big poster */}
      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-64 sm:h-72 object-cover rounded-t-2xl"
        />

        {/* small thumbnail overlapping bottom-left */}
        <div className="absolute left-4 -bottom-10">
          <img
            src={small}
            alt={`${title} thumb`}
            className="w-20 h-28 object-cover rounded-md shadow-md"
          />
        </div>

        {/* play button overlapping bottom-right */}
        <button
          className="absolute right-4 -bottom-8 bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transform transition"
          aria-label={`Play ${title}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 ml-0.5"
          >
            <path d="M4 2v20l18-10L4 2z" />
          </svg>
        </button>
      </div>

      {/* content area - add top padding to account for overlapping elements */}
      <div className="pt-12 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          </div>

          {/* rating stars small visual */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-400"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.335 24 12 19.897 4.665 24l1.635-8.69L.6 9.75l7.732-1.732z" />
            </svg>
            <span className="text-sm text-yellow-500 font-medium">
              {rating}
            </span>
          </div>
        </div>

        {/* small stars under title like five-star */}
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(Number(rating))
                  ? "text-yellow-400"
                  : "text-gray-200"
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.335 24 12 19.897 4.665 24l1.635-8.69L.6 9.75l7.732-1.732z" />
            </svg>
          ))}
        </div>

        {/* stats grid */}
        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-gray-500">
          <div>
            <div className="text-gray-400">Length</div>
            <div className="mt-1 text-sm text-gray-900 font-medium">
              {length}
            </div>
          </div>
          <div>
            <div className="text-gray-400">Lang</div>
            <div className="mt-1 text-sm text-gray-900 font-medium">{lang}</div>
          </div>
          <div>
            <div className="text-gray-400">Rating</div>
            <div className="mt-1 text-sm text-gray-900 font-medium">
              {rating}
            </div>
          </div>
          <div>
            <div className="text-gray-400">Review</div>
            <div className="mt-1 text-sm text-gray-900 font-medium">
              {reviews}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
