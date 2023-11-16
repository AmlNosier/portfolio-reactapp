import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Service from './components/service/Service'
import Protfolio from './components/protfolio/Protfolio'

import Testmonial from './components/testomnial/Testmonial'

import Contact from './components/contact/Contact'

import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Service />
      <Protfolio />
      <Testmonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
