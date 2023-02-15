import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h4>Estos son los productos de tu carrito</h4>
            <CartList cart={cart}/>
    
            {
                cart.map(prod => {
                    return (
                        <h2 key={prod.id}>{prod.name}</h2>
                    )
                })
            }
            <Link to='/checkout'className="btn btn-outline-secondary">Checkout</Link>
        </div>
    )
}

export default Cart