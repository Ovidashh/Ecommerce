import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/Shop-context';
import Home from './pages/home/home';
import Footer from './components/footer';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/shop' exact element={<Shop />} />
            <Route path='/cart' exact element={<Cart />} />
            <Route path='/login' exact element={<Login />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
