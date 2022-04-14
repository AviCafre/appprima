import './NavBar.css';
import Cartlogo from "../CartWidget/cartwidget";
import {Link, NavLink} from 'react-router-dom'

function NavBar  () {
    return (
        <div>
            <nav className='nav'>
                
                <ul className='roberto'><Cartlogo />
                    <li className='LOGO'><img src="/images/EB.png" alt="logo"></img></li>
                    <li className='brand'>En Bruto</li>
                    <li className='carlos'>inicio</li>
                    <li className='carlos'>productos</li>
                    <li className='carlos'>favoritos</li>
                    <li className='carlos'>contacto</li>
                </ul>
                <div className="Categories">
                    <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption': 'Option' }>List</NavLink>
                    
                    <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption': 'Option' }>Detail</NavLink>
                </div>
            </nav>
        </div>
    
    )
}

export default NavBar;