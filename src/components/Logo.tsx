import { VscCircleLargeFilled } from 'react-icons/vsc';
import './Logo.css';

const Logo = () => {
  return <div>
    <VscCircleLargeFilled className='leftButton'/>
    <VscCircleLargeFilled className='middleButton' />
    <VscCircleLargeFilled className='rightButton'/> 
    <span className='text'>Letterboxd</span>
  </div>
}

export default Logo