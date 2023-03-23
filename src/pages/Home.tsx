import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import './css/MoviesGrid.css';

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<movie[]>([]);

  const getPopularMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setPopularMovies(data.results.slice(0, 18));
  };

  useEffect(() => {
    const ratedMoviesUrl: string = `${moviesURL}popular?${apiKey}`;
    getPopularMovies(ratedMoviesUrl);
  }, []);

  return (
    <>
      <div className='initialScreen'>
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
        <h2 className='title'>Popular Movies</h2>
        <div className='movies-container'>
          {popularMovies.length === 0 && <h2 className='loading'>Loading...</h2>}
          {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  );
}

export default Home