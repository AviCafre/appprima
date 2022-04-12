import { useEffect, useState } from "react";


const Meliapi = (props) => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

   /*  useEffect(() => {
        getProductsById().then(prods => {
            setProducts (prods.id)
                    }).catch(error =>{
                        console.log(error)
    })
}, []) */

const handleSearch = () => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            return response.json()
        })
        .then(res => {
            setProducts(res.results)
        })
}
    return (
        <div> 
            <h1>Tu producto</h1>
            <div>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSearch}>Buscar</button>

                <ul>
                    {products.map(products => {
                        return(
                           <li key={products.id}>
                        <img src={products.thumbnail} alt={products.title}/>
                        <p>{products.description}</p>
                        <p>${products.price}</p>
                            </li>
                    
                        )
                    })} 
                    </ul> 
            </div>
            </div>
            
     )
}

export default Meliapi;
