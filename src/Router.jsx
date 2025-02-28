import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import UserLIst from './pages/usersList/UserList';
import NewUser from './pages/newUser/NewUser';
import Products from './pages/products/Products.jsx';
import ProductDetail from './pages/productDetail/ProductDetail';
import SignIn from './pages/SingIn/SignIn.jsx'


function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/users' element={<UserLIst />} />

        <Route path='/newUsers' element={<NewUser />} />

        <Route path='/Products' element={<Products />} />

        <Route path="/productDetail/:productID" element={<ProductDetail />} />

        <Route path='/SignIn' element={<SignIn />} />

        
      </Routes>
    </>
  )
}

export default Router
