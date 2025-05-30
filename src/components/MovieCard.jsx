import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}>View Movie</Link>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;