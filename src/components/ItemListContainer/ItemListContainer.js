import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
/* import {getProducts} from '../../mokup' */
import ItemList from '../ItemList/itemList'
import { firestoreDB } from "../../services/firebase";
import {useParams} from 'react-router-dom';



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const  { categoryId} = useParams();
    useEffect(() => {
        /* getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
          console.log(error)
    }) */

    const collectionRef = categoryId 
        ? query(collection(firestoreDB, 'products'),where('category', '==', 'categoryId'))
        :collection(firestoreDB, 'products')


    getDocs(collectionRef).then((response) => {
        console.log(response);
        const products = response.docs.map((doc) =>{
            return {id: doc.id, ...doc.data() };
        });
        setProducts(products);
    })
}, [categoryId]);

    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
           </div> )
}

export default ItemListContainer;
