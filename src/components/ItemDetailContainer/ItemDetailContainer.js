import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productAdapted = { id: doc.id, ...dataProduct }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle {product.name}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer