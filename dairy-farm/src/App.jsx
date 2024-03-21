import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
     {/* <Nav/>
     <Home/>
     <Products/> */}
    </>
  )
}

export default App
