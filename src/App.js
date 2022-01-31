import logo from './logo.svg';
import './App.css';
import ListaExercicios from './ListaExercicios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Aula de React!
          </h1>
          <ListaExercicios/>
        </div>
      </header>
    </div>
  );
}

export default App;
