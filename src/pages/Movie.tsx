import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, BsGraphUp } from 'react-icons/bs';
import './css/Movie.css';

const moviesURL: string = import.meta.env.VITE_API;
const imageUrl: string = import.meta.env.VITE_IMAGE;
const apiKey: string = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<movie>();

  const getMovie = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(movie);

    setMovie(data);
  }

  useEffect(() => {
    const movieUrl: string = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  const formatCurrency = (number: number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  return (
    <div className='movie-page'>
      {movie && (
        <>
          {movie.poster_path ? <img src={imageUrl + movie.poster_path} alt={movie.title} /> : <img src='https://via.placeholder.com/300x450' alt={movie.title} />}

          <h1 className='title'>{movie.title}</h1>

          <p className='tagline'>{movie.tagline}</p>

          <div className='info'>
            <h3>
              <BsWallet2 /> Budget
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className='info'>
            <h3>
              <BsGraphUp /> Revenue
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className='info'>
            <h3>
              <BsHourglassSplit /> Runtime
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>

          <div className='info description'>
            <h3>
              <BsFillFileEarmarkTextFill /> Overview
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie