import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer =({ greeting}) => {
    return(
        <div>
            <h1 className='ItemTexto'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer