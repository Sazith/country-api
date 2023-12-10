import './App.css';
import CountryPage from './components/CountryPage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 style={{color:'red'}}>Country Api</h2>
        </div>
        <div>
          <CountryPage/>
        </div>
      
      </header>
    </div>
  );
}

export default App;
