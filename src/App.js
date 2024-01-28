import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import "./App.css"
import Navbar from './Components/Navbar'
import Fotoor from './Components/Fotoor'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Project from './Components/Project'
import Blog from './Components/Blog'
const App = () => {
  return (
    <>
     <div className='app'>
     <Router >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Fotoor />
      </Router>

     </div>

    </>
  )
}

export default App