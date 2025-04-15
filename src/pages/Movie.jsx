import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) // ✅ assumes db.json has a movies array
    .then((res) => res.json())
    .then((data) => setMovie(data))
    .catch((err) => console.error("Failed to fetch movie:", err));
  }, [id]);

  if (!movie) return null;

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
        {/* Movie info here! */}
      </main>
    </>
  );
}

export default Movie;
