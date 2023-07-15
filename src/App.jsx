import React from 'react'
import './App.css'
import Header from './componets/Header'
import Paymentmethod from './componets/Paymentmethod'
import Figures from './componets/Figures'
import Businesshandling from './componets/Businesshandling'
import Easycontrol from './componets/Easycontrol'
import BetterCarddail from './componets/BetterCarddail'
import Sponsors from './componets/Sponsors'
import Service from './componets/Service'
import Testimonials from './componets/Testimonials'
import Footer from './componets/Footer'
function App() {
  return (
    <div>
        <Header/>
        <Paymentmethod/>
        <Figures/>
        <Businesshandling/>
        <Easycontrol/>
        <BetterCarddail/>
        <Sponsors/>
        <Testimonials/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default App
