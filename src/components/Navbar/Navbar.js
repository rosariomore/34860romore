import './Navbar.css'
import '../Button/CartWidget/CartWidget.js'
import CartWidget from '../Button/CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'

const Navbar =() => {

    const navigate = useNavigate()
    const { totalQuantity} = useContext (CartContext)

    return (
        <nav className="NavBar navbar-expand-lg" >
            <h4 onClick={() => navigate ('/')}>Tienda</h4>
            <div>
                <NavLink to="/category/vela" style={{ margin: 20 }}>Velas</NavLink>
                <NavLink to="/category/difusor" style={{ margin: 20 }}>Difusores</NavLink>
            </div>
            <CartWidget quantity={totalQuantity}/>
        </nav>
    )
}

export default Navbar
