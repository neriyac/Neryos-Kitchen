import { NavLink } from 'react-router-dom'

//styles
import './Navbar.css'

//Components
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/' className='brand'>
            <h1>Neryos Kitchen</h1>
        </NavLink>
        <Searchbar/>
        <NavLink to='/create'>
            Create Recipe
        </NavLink>
      </nav>
    </div>
  )
}
