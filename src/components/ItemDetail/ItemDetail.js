import Counter from '../ItemCount/itemCount'

/* Aca va el import del CSS para la card */

const Card = ({id,name, description, price, img}) => {
    return(
    <div>
        <h4 className="cardname"></h4>
        <img src={img} className="cardimg" alt={name} />
        <div>
            <p>{description}</p>
            <p className="precio">{price}</p>
            <h6>{id}</h6>
        </div>
        <div>
            <Counter/>
        </div>
    </div>
)}

export default Card;