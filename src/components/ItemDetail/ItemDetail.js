import Counter from '../ItemCount/itemCount'
import {Link} from 'react-router-dom'

/* Aca va el import del CSS para la card */

const Card = ({id,name, description, price, img}) => {/* 
    return(
    <>
        <h4 className="cardname"></h4>
        <img className="cardimg" src={"/images/ccorazon.jpg"}  alt={name}/>
        <div>
            <p>{description}</p>
            <p className="precio">{price}</p>
            <h6>{id}</h6>
        </div>
        
            <Counter/>
        
    </>
)*/
return(
    <article className="carditem">
        <header className="cardheader">
            <h4 className="itemname">{name}</h4>
            </header>
    
       <picture className="pic">
           <img  className="targ" src={img } alt={name}/>
       </picture>
   <section >
       <h2 className="articulo">{name}</h2>
       <h3 className="precio">Precio:${price}</h3>
       
   </section>

   <footer className="footer">
       <Link to={`productos/${id}`}>Ver Detalle</Link>
       <button className="vdet">Ver detalle</button>
   </footer>
</article>
)
} 
export default Card;