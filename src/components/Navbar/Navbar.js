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
        <nav style={{ displalay:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h3 onClick={() => navigate ('/')}>Tienda</h3>
            <div >
                <NavLink to="/category/vela" style={{ margin: 10 }}>Velas</NavLink>
                <NavLink to="/category/difusor">Difusores</NavLink>
            </div>
            <CartWidget quantity={totalQuantity}/>
        </nav>
    )
}

export default Navbar
