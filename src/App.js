import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/Button/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <CartWidget/>
        <ItemListContainer greeting="Bienvenidos a Entorno Turístico"/>
    </div>
  );
}

export default App;
