import { useState } from "react";
import './itemCount.css';

const Counter = ({initial, stock, onAdd}) => {
    const  [count, setCount] =useState(initial);

    const increment = () => {
        if (count < stock){
         setCount (count + 1 )
            } else { alert ("Has llegado al limite de stock")};
    }


    const decrement = () =>{
        if (count >initial){
         setCount(count - 1)
            } else {alert ("Debes elegir al menos 1 producto")};
    }

    

    return(
        <div className="contador">
            <ul>
                <li className="ct"><button className="disminuir" onClick={decrement}>-</button></li>
                <li className="ct"><p className="conteo">{count}</p></li>
                <li className="ct"><button className="aumentar" onClick={increment}>+</button></li>
                <li className="ct"><button className="add" onClick={() => onAdd(count) } >Agregar al carrito</button></li>
        </ul>
        </div>
    )
}


export default Counter;