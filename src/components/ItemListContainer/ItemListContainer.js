import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =() => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products =>{
                setProducts(products)
            })
            .catch(error =>{
console.log(error)
            })
},[categoryId])

    return(
        <div>
            <h1>Listado de productos</h1>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',float:'left'}}>
            <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer