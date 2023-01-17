import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/Button/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:productId' element={<ItemDetailContainer />} />
            </Routes>   
        </BrowserRouter>
        <CartWidget/>
    </div>
  );
}

export default App;
