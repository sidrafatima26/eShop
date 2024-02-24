import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={ <> <Header/> <Checkout/>  </> }/>
          <Route path="/" element={ <> <Header/> <Home/>  </> }/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
