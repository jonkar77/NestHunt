import { useState } from 'react'
import Filter from './components/JsxFiles/Filter'
import Navbar from './components/JsxFiles/Navbar'
import Home from './components/JsxFiles/Home'
import Footer from './components/JsxFiles/Footer'
import HouseGrid from './pages/JsxFiles/HouseGrid'

import Brokers from './pages/JsxFiles/Brokers'
import BrokerProfile from './pages/JsxFiles/BrokerProfile'
import HouseDetails from './pages/JsxFiles/HouseDetails'
import { Router, Route, Routes } from "react-router-dom";
import Property from './pages/JsxFiles/Property'

// import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Brokers />} path="/broker" />
        <Route element={<BrokerProfile />} path="/brokerprofile" />
        <Route element={<HouseGrid />} path="/housegrid" />
        <Route element={<HouseDetails />} path="/housedetail" />
        <Route element={<HouseDetails />} path="/housegrid/housedetail" />
        <Route element={<Property />} path="/property" />
      </Routes>
      {/* <HouseGrid/> */}
      {/* <Brokers/> */}
      {/* <BrokerProfile/> */}
      {/* <HouseDetails /> */}
      {/* <Property/> */}
      <Footer />
    </div>
  )
}

export default App