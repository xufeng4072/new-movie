import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function Movies({movie}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path=== null ?
                    <img src={noPoster} alt="No poster available." /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Godzilla vs Kong" />
                }
                
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/* not the correct location...for demo only */}
                <Link to={`/single-movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default Movies