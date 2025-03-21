import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Products from './Pages/Products'
import Category from './Pages/Category'
import Favorits from './Pages/Favorits'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Masculino' element={<Category category="men"/>}/>
          <Route path='/Feminino' element={<Category category="women"/>}/>
          <Route path='/Kids' element={<Category category="kid"/>}/>
          <Route path="/products" element={<Products/>}>
            <Route path=":productId" element={<Products/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/LoginSignup" element={<LoginSignup/>}/>
          <Route path="/Favoritos" element={<Favorits/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
