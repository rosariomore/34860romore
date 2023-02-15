import { Link } from "react-router-dom"

const CartWidget = ({ quantity }) => {
    return(
        <Link to='/cart'style={{display: "flex", float: "right", font: 'Playfair Display', fontSize:'large', padding: '6px'}}>
            <img src="./images/carrito.png" alt="cart-widget"/>
            <div className="btn">
            { quantity }
            </div>
        </Link>
    );
}


export default CartWidget