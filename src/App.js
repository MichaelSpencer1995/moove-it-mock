import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from './components/nav'
import AboutUs from './components/aboutus'
import Brands from './components/brands'
import ContactUs from './components/contactus'
import Footer from './components/footer'
import Header from './components/header'
import MessageUs from './components/messageus'
import Testimonials from './components/testimonials'
import WhatWeDo from './components/whatwedo'
import './App.css'
import TechnologiesWeMaster from './components/technologieswemaster';

class App extends Component {
  render() {
    return (
      <Container>
        <Nav />
        <Header />
        <Brands />
        <Testimonials />
        <WhatWeDo />
        {/* <AboutUs /> */}
        <TechnologiesWeMaster />
        <ContactUs />
        <Footer />
        <MessageUs />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App
