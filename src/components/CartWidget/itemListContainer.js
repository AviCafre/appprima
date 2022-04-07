import { useEffect, useState } from "react";
import {getProducts} from '../Item/mokup'
import ItemList from '../Item/itemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts (prods)
                    }).catch(error =>{
                        console.log(error)
    })
}, [])

    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products} />
           </div> )
}

export default ItemListContainer;
