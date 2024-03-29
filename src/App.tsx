import { Outlet } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Styles
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App