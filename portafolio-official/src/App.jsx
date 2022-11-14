import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portafolio from './Components/portafolio/Portafolio'
import Services from './Components/services/Services'
import Testimonials from './Components/testimonials/Testimonials'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portafolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App