import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import './components/CartWidget/cartwidget';
import ItemListContainer from './components/CartWidget/itemListContainer';
import Counter from './components/ItemCount/itemCount';
import './components/Item/item.css'
import Item from './components/Item/item';


function App() {

    const handleOnAdd= (quantity) => {
      console.log ("se agregaron ${`quantity`} productos")
    }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido a: EN BRUTO'}/>
        <Counter  initial={0} stock={15} onAdd={handleOnAdd} />
        
          
      </header>
    </div>
  );
}

export default App;
