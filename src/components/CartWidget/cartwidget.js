import './cartwidget.css';
import { useContext } from 'react';
import CartContext from '../../Context/Cart/CartContext';


const Cartlogo = () =>{
    
    const {getQuantity} = useContext(CartContext)
    return (
        <div id="btnback">
            <button id="btncar">{<img className='carrito'src="./images/cart-alt.svg" alt="cart"></img>}</button>
            {getQuantity}
        </div>);
}


 export default Cartlogo;



