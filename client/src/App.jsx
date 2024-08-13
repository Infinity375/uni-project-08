import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'

import { AuthContextProvider } from './contexts/AuthContext'
import ProductCatalog from './components/product-catalog/ProductCatalog'
import ProductDetails from './components/product-details/ProductDetails'

function App() {
  
  return (
    <AuthContextProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/products' element={<ProductCatalog />} />
            <Route path='/products/:productId/details' element={<ProductDetails />} />
            {/*<Route path='/games/:gameId/edit' element={<GameEdit />} />
            <Route path='/games/create' element={<GameCreate />} />*/}
          </Routes>
        </main>

      </div>
    </AuthContextProvider>
  )
}

export default App
