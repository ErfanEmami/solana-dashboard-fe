import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./home/home"

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/about' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
