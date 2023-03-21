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

  const convertToBase5 = (rating: number) => {
    return Math.round((rating / 10) * 5 * 2) / 2;
  }

  return (
    <div className='movie-card'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      {/* <h2>{showLink ? <Link to={`/movie/${movie.id}`}>{movie.title}</Link> : movie.title}</h2> */}
      <p>
        <IoIosStar className='star-icon' /> {convertToBase5(movie.vote_average)}
      </p>
    </div>
  )
}

export default MovieCard