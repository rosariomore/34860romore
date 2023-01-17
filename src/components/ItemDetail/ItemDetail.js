const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    return (
    <div>
        <h4>{name}</h4>
        <p>{category}</p>
        <img src={img} alt={name}/>
        <p> $ {price}</p>
        <p>Descripcion: {description}</p>
    </div>   
    )
}

export default ItemDetail