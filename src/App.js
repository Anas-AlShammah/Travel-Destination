
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import data from './data/db.json'


import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <Routes>
        <Route path='/' element={<Home  data={data}/>}/>
        <Route path='/city/:id' element={<TourDetails  tour={data}/>}/>
       </Routes>
      </header>
    </div>
  );
}

export default App;
