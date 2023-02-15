import { Link, useNavigate } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    const navigate = useNavigate ()

    return (
        <div onClick={() => navigate(`/item/${id}`)}>
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width:100}}/>
            <p>$ {price}</p>
            <Link to={`/item/${id}`} className="btn btn-secondary">Ver detalle</Link>
            </div>
    )
}

export default Item