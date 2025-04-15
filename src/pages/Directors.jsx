import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors") // adjust port if needed
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((err) => console.error("Failed to fetch directors:", err));
  }, []);

  return (
    <>
      <header>
      <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
      <h1>Directors Page</h1>
        {directors.map((director) => (
          <section key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </section>
        ))}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
