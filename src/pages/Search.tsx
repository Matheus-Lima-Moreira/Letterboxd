import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './MoviesGrid.css';

const searchUrl: string = import.meta.env.VITE_SEARCH;
const apiKey: string = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<movie[]>([]);

  const valueOfSearch = searchParams.get('q') || '';
  const query = valueOfSearch.toUpperCase().trim();

  const getSearchedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results.slice(0,18));
  };

  useEffect(() => {  
    const searchWithQueryUrl: string = `${searchUrl}?${apiKey}&query=${query.split(' ').join('+')}`;
    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className='container'>
      <h3 className='resultSearch'>FOUND {movies.length} MATCHES FOR "{query}"</h3>
      <div className='movies-container'>
        {movies.length === 0 && <h2>Carregando...</h2>}
        {movies.length > 0 && movies.map((movie) => {
          const props = { movie: movie, showLink: true };
          return <MovieCard key={movie.id} props={props} />;
        })}
      </div>
    </div>
  )
}

export default Search
