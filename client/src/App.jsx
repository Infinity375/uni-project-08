import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import ProductCatalog from './components/product-catalog/ProductCatalog'
import ProductDetails from './components/product-details/ProductDetails'
import ProductCreate from './components/product-create/ProductCreate'
import PostBlog from './components/posts/PostsBlog'
import ProductEdit from './components/product-edit/ProductEdit'
import PostDetails from './components/post-details/PostDetails'
import PostCreate from './components/post-create/PostCreate'
import PostEdit from './components/post-edit/PostEdit'

import { AuthContextProvider } from './contexts/AuthContext'

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
            <Route path='/products/:productId/edit' element={<ProductEdit />} />
            <Route path='/products/create' element={<ProductCreate />} />
            <Route path='/posts' element={<PostBlog/>}/>
            <Route path='/posts/:postId/details' element={<PostDetails />} />
            <Route path='/posts/create' element={<PostCreate />} />
            <Route path='/posts/:postId/edit' element={<PostEdit />} />

          </Routes>
        </main>

      </div>
    </AuthContextProvider>
  )
}

export default App
