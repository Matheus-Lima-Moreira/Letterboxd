import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import './MoviesGrid.css';

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [ratedMovies, setRatedMovies] = useState<movie[]>([]);

  const getRatedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setRatedMovies(data.results);
  };

  useEffect(() => {
    const ratedMoviesUrl: string = `${moviesURL}top_rated?${apiKey}`;
    getRatedMovies(ratedMoviesUrl);
  }, []);

  return (
    <>
      <div className='initialScrren'>
        <div className='imageBackground'>
          <h1 className='initialText'>
            Track films you’ve watched.<br />
            Save those you want to see.<br />
            Tell your friends what’s good.
          </h1>
          <button className='initialButton'>
            GET STARTED - IT'S FREE!
          </button>
        </div>
        <div className='fade'></div>
      </div>
      <div className='container'>
        <h2 className='title'>Best Rated Movies</h2>
        <div className='movies-container'>
          {ratedMovies.length === 0 && <h2>Carregando...</h2>}
          {ratedMovies.length > 0 && ratedMovies.map((movie) => {
            const props = { movie: movie, showLink: true };
            return <MovieCard key={movie.id} props={props} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home