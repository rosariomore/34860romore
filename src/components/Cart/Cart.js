import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1>Estos son los productos de tu carrito</h1>
            <CartList cart={cart}/>
    
            {
                cart.map(prod => {
                    return (
                        <h2 key={prod.id}>{prod.name}</h2>
                    )
                })
            }
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart