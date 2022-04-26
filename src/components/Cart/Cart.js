import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";



const Cart = () => {

    const {Cart, removeItem} = useContext(CartContext)

    if(Cart.length === 0) {
        return(
            <h1>No hay productos agregados</h1>
        )
    }
    return (

        <>
        <h1>Cart</h1>
        <ul>
            {Cart.map(prod=> <li key={prod.id}>{prod.name}<button onClick={() => removeItem(prod.id)}></button></li>)}
        </ul>
        
        </>
    )
}
export default Cart;