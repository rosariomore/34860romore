import '../Button/CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

const Navbar =() => {
    return (
        <nav style={{ displalay:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div >
                <Link to="/category/vela" style={{ margin: 10 }}>Velas</Link>
                <Link to="/category/difusor">Difusores</Link>
            </div>
        </nav>
    )
}

export default Navbar
