import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2>
        <Link to='/'><Logo /></Link>
      </h2>
      <form>
        <input type='text' />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar