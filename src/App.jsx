import "./App.css";
import MovieCard from "./components/UI/MovieCard.jsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="mt-6">
        <MovieCard
          image="/public/sample-poster.jpg"
          title="Sample Movie"
          description="A short sample description that demonstrates the MovieCard layout. It should truncate after a few lines in the card view."
          duration="1h 42m"
          releaseDate="2024"
        />
      </div>
    </>
  );
}

export default App;
