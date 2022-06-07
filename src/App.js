
import './App.css';
import './stylesheets/Layout.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductInfo from './pages/ProductInfo';
import RegisterPage from './pages/RegisterPage';
import {Route , BrowserRouter , Routes} from 'react-router-dom'
import './stylesheets/products.css';
function App() {
  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<HomePage/>}/>
     <Route path='/login' exact element={<LoginPage/>}/>
     <Route path='/register' exact element={<RegisterPage/>}/>
     <Route path='/productinfo/:productid' exact element={<ProductInfo/>}/>
     <Route path='/cart' exact element={<CartPage/>}/>


   </Routes>
   
   </BrowserRouter>
      
    </div>
  );
}

export default App;
