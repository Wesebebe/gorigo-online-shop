import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/'/>
          <Route path='/Cart'/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
