import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/Shop-context';
import Home from './pages/home/home';
import Footer from './components/footer';
import Login from './pages/Login/Login';
import Contact from './pages/contact/Contact';
import Formullar from './pages/contact/Formullar';
function App() {
  return (
    <div className="App">

      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact={true} element={<Home />} className="Homepath" />
            <Route path='/shop' exact={true} element={<Shop />} />
            <Route path='/cart' exact={true} element={<Cart />} />
            <Route path='/contact' exact={true} element={<Contact />} />
            <Route path='/login' exact={true} element={<Login />} />
           

          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
