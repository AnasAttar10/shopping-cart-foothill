import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Products from './components/Products/Products';
import ShoppingCartProvider from './Context/shopppingcartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Nav />
          <Routes>
              <Route path='/' element={<div>Home</div>}></Route>
              <Route path='store' element={<Products />}></Route>
              <Route path='contact' element={<div>contact </div>}></Route>
              <Route path='checoutform' element={<Checkout />}></Route>
              <Route path='*' element={<div>oops ... , Not Found Page </div>}></Route>  
          </Routes>
      </div>
    </ShoppingCartProvider>

  );
}

export default App;
