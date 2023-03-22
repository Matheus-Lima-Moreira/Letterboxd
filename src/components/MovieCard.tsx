import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const convertToBase5 = (rating: number) => {
    return Math.round((rating / 10) * 5 * 2) / 2;
  }

  const handleMouseOver = (e: React.MouseEvent<HTMLInputElement>): void => {
    document.getElementById(e.currentTarget.id)?.querySelector('.movie-status')?.classList.add('visible')
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>): void => {
    document.getElementById(e.currentTarget.id)?.querySelector('.movie-status')?.classList.remove('visible')
  }

  const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    navigate(`/movie/${e.currentTarget.id}`)
  }

  return (
    <div className='movie-card' onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} id={movie.id.toString()}>
      {
        movie.poster_path
          ?
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          :
          <img src='https://via.placeholder.com/300x450' alt={movie.title} />
      }
      <span className='movie-status'>
        <span><IoIosStar className='star-icon' /> {convertToBase5(movie.vote_average)}</span><br />
        <span>{movie.title}</span>
      </span>
    </div>
  )
}

export default MovieCard