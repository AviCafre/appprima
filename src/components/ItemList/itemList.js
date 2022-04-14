import Item from '../Item/item'
import './itemlist.css'

const ItemList = ({products}) => {

    return(
        <div className='carta'>
            {products.map(prod=> <Item   key={prod.id} {...prod}/>)}
        </div>
    )
    }

    export default ItemList;