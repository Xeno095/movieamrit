import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Error from './pages/Error'


const App = () => {
  return (
    <>
     <Routes>
      <Route index element = {<Home />} />
      <Route path="/features" element = {<Features />} />
      <Route path="/contact" element = {<Contact />} />
      <Route path="*" element = {<Error />} />
     </Routes>
    </>
  )
}

export default App
