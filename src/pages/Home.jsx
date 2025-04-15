import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulating fetch logic
    setMovies(mockMovies);
  }, []);

  return (
    <>
      <header>
      <NavBar />
      <h1>Home Page</h1>
        {/* What component should go here? */}
      </header>
      <main>
      {movies.map(({ id, title }) => (
          <article key={id}>
            <h2>{title}</h2>
            <Link to={`/movie/${id}`}>View Info</Link>
          </article>
        ))}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
