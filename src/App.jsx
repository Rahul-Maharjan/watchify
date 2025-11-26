import "./App.css";
import { Routes, Route } from "react-router";
import MoviePage from "./components/Pages/MoviePage.jsx";
import GoogleAuth from "./components/UI/GoogleAuth.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/auth" element={<GoogleAuth />} />
      </Routes>
    </>
  );
}

export default App;
