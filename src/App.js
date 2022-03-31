import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import './components/CartWidget/cartwidget';
import ItemListContainer from './components/CartWidget/itemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido a: EN BRUTO'}/>
      </header>
    </div>
  );
}

export default App;
