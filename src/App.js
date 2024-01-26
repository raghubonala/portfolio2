import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import "./App.css"
import Navbar from './Components/Navbar'
import Fotoor from './Components/Fotoor'
import Contact from './Components/Contact'
const App = () => {
  return (
    <>
    <Router >
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Fotoor/>
    </Router>
    

    </>
  )
}

export default App