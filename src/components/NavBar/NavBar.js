import './NavBar.css';
import Cartlogo from "../CartWidget/cartwidget";


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
            </nav>
        </div>
    )
}

export default NavBar;