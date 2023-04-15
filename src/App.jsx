import { useState } from 'react'
import Filter from './components/JsxFiles/Filter'
import Navbar from './components/JsxFiles/Navbar'
import Home from './components/JsxFiles/Home'
import Footer from './components/JsxFiles/Footer'
import Cards from './components/JsxFiles/Cards'
import HouseGrid from './pages/JsxFiles/HouseGrid'

import { Route } from 'react-router-dom'
import About from './components/JsxFiles/About'
import CardDetail from './components/JsxFiles/CardDetail'
import Amenities from './components/JsxFiles/Amenities'
import Brokers from './pages/JsxFiles/Brokers'
import BrokerProfile from './pages/JsxFiles/BrokerProfile'
import HouseDetails from './pages/JsxFiles/HouseDetails'


// import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <Cards/> */}
      {/* <About/> */}
      {/* <HouseGrid/> */}
      {/* <CardDetail/> */}
      {/* <Amenities/> */}
      {/* <Brokers/> */}
      {/* <BrokerProfile/> */}
      {/* <HouseDetails /> */}
      <Footer />
    </div>
  )
}

export default App