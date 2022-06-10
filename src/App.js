
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import './stylesheets/Layout.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductInfo from './pages/ProductInfo';
import RegisterPage from './pages/RegisterPage';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import './stylesheets/products.css';
import './stylesheets/authenication.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='App'>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/register' exact element={<RegisterPage />} />
          <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo/></ProtectedRoutes>}/>
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage></CartPage></ProtectedRoutes>}/>


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

export const ProtectedRoutes=({children})=>{

  if(localStorage.getItem('currentUser')){
    return children;
  }
  else{
    return <Navigate to='/login' />
  }
}

