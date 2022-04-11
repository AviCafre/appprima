import { useEffect, useState } from "react";
import {getProductsById} from '../Item/mokup'
import Card from '../ItemDetail/ItemDetail'

const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsById().then(prods => {
            setProducts (prods.id)
                    }).catch(error =>{
                        console.log(error)
    })
}, [])

    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <Card products={products} />
           </div> )
}

export default ItemDetailContainer;
