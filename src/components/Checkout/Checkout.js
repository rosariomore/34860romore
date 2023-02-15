import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { Fragment, useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"

    const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const { cart, total, clearCart,} = useContext(CartContext)
    const {Nombre, Email, Telefono, handleSubmit} = useState("")



    const [buyer, setBuyer] = useState({
            Nombre:"",
            Email: "",
            Telefono:""
    })
            
    
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
    })

    }
    const createOrder = async (name, phone, email) => {
        setLoading(true)
                
        const objOrder = {
            buyer: buyer,
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

        if (outOfStock.length === 0) {
            await batch.commit();

            const orderRef = collection(db, "orders");

            const orderAdded = await addDoc(orderRef, objOrder);

            const { id } = orderAdded;

            setOrderId(id);

            clearCart();
            setLoading(false);
            console.log(id);
        } else {
            console.error("hay productos fuera de stock");
        }
    };

    if (loading) {
        return <h5>Generando orden...</h5>;
    } else if (orderId) {
        return (
            <div>
                <h5>El Id de su compra es: {orderId}</h5>
            </div>
        );
    } else {
        return (
            <div>
        <Fragment>
        <form onSubmit={handleSubmit}>

        <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            value={Nombre}
            onChange={handleInputChange}
            required
        />
            <br/>
        <input
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={handleInputChange}
            required
        />
            <br/>
        <input
            type="number"
            name="Telefono"
            placeholder="Telefono"
            value={Telefono}
            onChange={handleInputChange}
            required
        />
            <br/>
        <input
            type="submit"
            name="Finalizar compra"
            className="btn btn-succes"
        />            
        </form>
        <button onClick={createOrder}className="btn btn-outline-secondary">Generar orden</button>
        </Fragment>
            </div>
        );
    }
};

export default Checkout;