import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

//styles
import './Navbar.css'

//Components
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
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
