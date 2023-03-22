import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './Movie.css';

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<movie>();

  const getMovie = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    const movieUrl: string = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div>{movie && movie.title}</div>
  )
}

export default Movie