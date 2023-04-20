import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import data from './data/db.json'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home data={data}/>
       
      </header>
    </div>
  );
}

export default App;
