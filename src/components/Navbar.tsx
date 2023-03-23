import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import Logo from './Logo';
import './css/Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!search) return;
    
    navigate(`/search?q=${search}`);
  };

  return (
    <nav id='navbar'>
      <h2>
        <Link to='/'><Logo /></Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar