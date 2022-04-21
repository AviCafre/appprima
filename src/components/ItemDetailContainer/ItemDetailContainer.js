import { useEffect, useState } from "react";
import { useParams}  from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"; 
import { getProductsById } from "../../mokup";


const ItemDetailContainer = (setCart, cart) => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    

    const {productId}= useParams()

    useEffect(() => {
        getProductsById(productId).then(prods => {
            setProducts (prods.id)
                    }).catch(error =>{
                        console.log(error)
    })
    return(() => {
    setProducts()
})
}, [productId]) 



return(
    <div >
        {<ItemDetail {...products} setCart={setCart} cart={cart} />}
    </div>
)
}

export default ItemDetailContainer;
