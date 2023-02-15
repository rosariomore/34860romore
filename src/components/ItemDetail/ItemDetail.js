import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/itemCount"

const ItemDetail =({ name, id, img, category, description, stock, price}) => {

    const [quantity, setQuantity] = useState (0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        console.log (`Se agregaron ${quantity}, ${name} `, quantity, price)

        setQuantity(parseInt(quantity))

        addItem ({id, name, quantity, price})

    }

    return (
        <div className="container-fluid-item-detalle">
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name} style={{width:200}}/>
            <p>$ {price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link to={"/cart"} className="btn btn-secondary" >Finalizar Compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }

        </div>
    )
}

export default ItemDetail