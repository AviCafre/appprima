/* import products from "../../mokup"; */
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../App";

const Item  = ({id, name, img, price, description}) => {
    
    /* const value = useContext(Context) */
    
    return(
         <article className="carditem">
             <header className="cardheader">
                 <h4 className="itemname">{name}</h4>
                 </header>
         
            <picture className="pic">
                <img  className="targ" src={img } alt={name}/>
                Description:<p>{description}</p>
            </picture>
        <section >
            <h2 className="articulo">{name}</h2>
            <h3 className="precio">Precio:${price}</h3>
            
        </section>

        <footer className="footer">
            <Link to={`/item/${id}`}>Ver Detalle</Link>
            <button className="vdet">Ver detalle</button>
        </footer>
    </article>
    )
}

export default Item;