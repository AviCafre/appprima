import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
/* import {getProducts} from '../../mokup' */
import { getDocs } from "firebase/firestore";
import ItemList from '../ItemList/itemList'
import { firestoreDB } from "../../services/firebase";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        /* getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
          console.log(error)
    }) */

    getDocs(collection(firestoreDB), 'products')
}, [])

    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
           </div> )
}

export default ItemListContainer;
