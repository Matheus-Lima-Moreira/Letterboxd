import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import { HiLanguage } from 'react-icons/hi2';
import { FcLikePlaceholder } from "react-icons/fc";

const imageUrl: string = import.meta.env.VITE_IMAGE;

type Props = {
  movie: movie;
};

const MovieCard = ({ movie }: Props) => {
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
      {movie.poster_path ? <img src={imageUrl + movie.poster_path} alt={movie.title} /> : <img src='https://via.placeholder.com/300x450' alt={movie.title} />}
      <span className='movie-status'>
        {/* Star */}
        <span>
          <IoIosStar className='icon' />
          {convertToBase5(movie.vote_average)}
        </span>
        <br />
        {/* Language */}
        <span>
          <HiLanguage className='icon' />
          {movie.original_language}
        </span>
        <br />
        {/* Popularity */}
        <span>
          <FcLikePlaceholder className='icon' />
          {movie.popularity}
        </span>
      </span>
    </div>
  )
}

export default MovieCard