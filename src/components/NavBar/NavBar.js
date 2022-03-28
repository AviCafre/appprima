import './NavBar.css';


const NavBar = () =>{
    

    return (
        <div>
            <nav className='nav'>
                <ul className='roberto'>
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