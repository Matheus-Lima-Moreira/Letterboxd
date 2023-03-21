import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';

const imageUrl: string = import.meta.env.VITE_IMAGE;

export interface Props {
  props: {
    movie: movie;
    showLink: boolean;
  }
};

const MovieCard = (props: Props) => {
  const { movie, showLink } = props.props;

  return (
    <div className='movie-card'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{showLink ? <Link to={`/movie/${movie.id}`}>{movie.title}</Link> : movie.title}</h2>
      <p>
        <IoIosStar /> {movie.vote_average}
      </p>
    </div>
  )
}

export default MovieCard