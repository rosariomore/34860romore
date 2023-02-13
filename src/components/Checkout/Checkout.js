import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"

    const Checkout = () => {
    const { cart, total} = useContext(CartContext)

    const createOrder = async () => {
        const objOrder = {
            buyer: {
                name: 'Maria Rosario More',
                phone: '2236889403',
                email: 'rosariomore@hotmail.com'
            },
                items: cart, 
                total 
        }

        const batch = writeBatch(db) 

        const ids = cart.map(prod => prod.id)
        console.log (ids)

        const productsRef = query(collection(db, 'products'), where(documentId(),'in', ids))

        const productsAddedToCartFromFirestore = await getDocs(productsRef)
        const { docs } = productsAddedToCartFromFirestore

        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc (orderRef, objOrder)

            const { id } = orderAdded
            console.log(id)
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default Checkout