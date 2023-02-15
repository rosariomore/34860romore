import { useState } from "react"

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev -1)
        }
    }

    const increment = () => { 
        if(count < stock) {
            setCount(prev => prev +1)
                }
    }

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={decrement} className="btn btn-outline-secondary">-</button>
            <button onClick={increment}className="btn btn-outline-secondary">+</button>
            <button onClick={() => onAdd (count)} className="btn btn-outline-secondary">Agregar al carrito</button>
        </div>
        )        
}

export default ItemCount