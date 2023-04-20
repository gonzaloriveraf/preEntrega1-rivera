import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <NavBar/> 
       <ItemListContainer greeting="Bienvenido" />

 
      </header>
    </div>
  );
}

export default App;
