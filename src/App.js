
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Product from './pages/Product';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Shopping-cart" element={<ShoppingCart/>} />
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
