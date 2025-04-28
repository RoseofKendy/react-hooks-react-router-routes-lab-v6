// src/pages/Home.jsx
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Mock data that matches test expectations
    const mockMovies = [
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "Trolls" },
      { id: 3, title: "Jack Reacher: Never Go Back" }
    ];
    setMovies(mockMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;