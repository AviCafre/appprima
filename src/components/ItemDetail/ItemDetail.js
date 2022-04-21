import Counter from '../ItemCount/itemCount'
import {Link} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import itemCount from '../ItemCount/itemCount'
import {useState, useContext} from 'react'
import { Context } from '../../App'
/* Aca va el import del CSS para la card */

const ItemDetail = ({id,name, description, price, img, setCart, cart}) => {
    const [quantity, setQuantity]= useState (0)
    
    const handleOnAdd= (count) => {
        const objP {
            id, name, price, quantity
        }
        setCart([... cart, objP])
        setQuantity(count)
    }

    const value= useContext(Context)
    
    const handleSelect= (value) => {
        navigate(value)
    }

return(

   <ItemDetailContainer>
      
    <article className="carditem">
        <header className="cardheader">
            <h4 className="itemname">{name}</h4>
            </header>
    
       <picture className="pic">
           <img  className="targ" src={img } alt={name}/>
           <p>{description}</p>
       </picture>
   <section >
       <h2 className="articulo">{name}</h2>
       <h3 className="precio">Precio:${price}</h3>
       
   </section>
         <div>
             {/* <Select options={options} onSelect={handleSelect}/> */}
            {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Counter onConfirm={handleOnAdd} stock={stock} />}

         </div>
   <footer className="footer">
       <Link to={`productos/${id}`}>Ver Detalle</Link>
       <button className="vdet">Ver detalle</button>
   </footer>
</article>
</ItemDetailContainer> 
    )
} 
export default ItemDetail;