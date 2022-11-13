import { NavLink } from 'react-router-dom'

//styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/' className='brand'>
            <h1>Neryos Kitchen</h1>
        </NavLink>
        <NavLink to='/create'>
            Create Recipe
        </NavLink>
      </nav>
    </div>
  )
}
