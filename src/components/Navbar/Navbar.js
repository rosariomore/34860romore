import '../Navbar.css'
import '../Button/CartWidget/CartWidget.js'

const Navbar =() => {
    return (
        <nav className="Navbar">
        <div style={{display: "flex"}}>
            <img src="./images/LogoETH.png"/>
        </div>
            <div style={{ backgroundColor: "#f6fcfc", display: "flex"}}>
                <button className='button'>Paquetes</button>
                <button className='button'>Promociones</button>
                <button className='button'>Asistencias</button>
            </div>
        </nav>
    )
}

export default Navbar