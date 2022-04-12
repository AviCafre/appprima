import Counter from '../ItemCount/itemCount'

/* Aca va el import del CSS para la card */

const Card = ({id,name, description, price, img}) => {
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
)}

export default Card;