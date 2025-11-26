import React from "react";
import MovieCard from "../UI/MovieCard.jsx";

const MoviePage = () => {
  const movies = [
    {
      image: "/poster-default.jpg",
      title: "Sample Movie",
      description:
        "A short sample description that demonstrates the MovieCard layout. It should truncate after a few lines in the card view.",
      length: "1h 42m",
      rating: "4.5",
      reviews: "1.2K+",
      lang: "Eng",
    },
    {
      title: "Sample Movie 2",
      description:
        "Another short sample description for a different movie. This one is also meant to demonstrate the MovieCard layout.",
      length: "2h 15m",
      rating: "4.2",
      reviews: "850+",
      lang: "Eng",
    },
    {
      title: "Sample Movie 3",
      description:
        "Yet another short sample description for a third movie. This one continues to demonstrate the MovieCard layout.",
      length: "1h 50m",
      rating: "4.7",
      reviews: "2.1K+",
      lang: "Eng",
    },
  ];
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">TV Comedies</h2>

      <div className="flex gap-4 overflow-x-auto py-2 px-2 snap-x snap-mandatory">
        {movies.map((movie, index) => (
          <div key={index} className="snap-start">
            <MovieCard
              image={movie.image}
              title={movie.title}
              description={movie.description}
              length={movie.length}
              rating={movie.rating}
              reviews={movie.reviews}
              lang={movie.lang}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
