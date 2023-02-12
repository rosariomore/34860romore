import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>} />
            <Route path='/item/:productId' element={<ItemDetailContainer/>} />
            {<Route path='/cart' element={<Cart/>} />}
        </Routes>   
    )
}

export default AppRouter