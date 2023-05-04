import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './NavBar.css' 
import {ShopContextProvider} from './context/ShopContext'

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Cart'element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
