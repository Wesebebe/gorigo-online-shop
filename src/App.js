import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './NavBar.css' 

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Cart'element={<Cart/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
