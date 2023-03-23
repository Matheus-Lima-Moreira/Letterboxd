import { VscCircleLargeFilled } from 'react-icons/vsc';
import './css/Logo.css';

const Logo = () => {
  return (
    <div className='logo'>
      <VscCircleLargeFilled className='leftButton' />
      <VscCircleLargeFilled className='middleButton' />
      <VscCircleLargeFilled className='rightButton' />
      <span className='text'>Letterboxd</span>
    </div>
  )
}

export default Logo