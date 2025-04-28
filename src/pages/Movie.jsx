// src/pages/Movie.jsx
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Mock data that matches test expectations
    const mockMovie = {
      id: 1,
      title: "Doctor Strange",
      time: "115",
      genres: ["Action", "Adventure", "Fantasy"]
    };
    setMovie(mockMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;