import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/Shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Shop />}/>
          <Route path='/cart' exact element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
