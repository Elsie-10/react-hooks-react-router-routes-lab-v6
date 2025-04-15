import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; 
function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors") // adjust port if different
      .then((res) => res.json())
      .then((data) => setActors(data))
      .catch((err) => console.error("Failed to fetch actors:", err));
  }, []);

  return (
    <>
      <header>
      <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor) => (
          <section key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </section>
        ))}
        {/* Actor info here! */}
      </main>
    </>
  );
};

export default Actors;
