import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonilas from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="container">
        <Header/>
          <Nav/>
          <About/>
          <Experience/>
          <Services/>
          <Portfolio/>
          <Testimonilas/>
          <Contact/>
          <Footer/>
        {/* <div className="bubbles">
            <span style={{'--i':'11'}} ></span>
            <span style={{'--i':'18'}} ></span>
            <span style={{'--i':'12'}} ></span>
            <span style={{'--i':'16'}} ></span>
            <span style={{'--i':'23'}} ></span>
            <span style={{'--i':'14'}} ></span>
            <span style={{'--i':'28'}} ></span>
            <span style={{'--i':'15'}} ></span>
            <span style={{'--i':'21'}} ></span>
            <span style={{'--i':'20'}} ></span>
            <span style={{'--i':'11'}} ></span>
            <span style={{'--i':'18'}} ></span>
            <span style={{'--i':'12'}} ></span>
            <span style={{'--i':'16'}} ></span>
            <span style={{'--i':'23'}} ></span>
            <span style={{'--i':'14'}} ></span>
            <span style={{'--i':'28'}} ></span>
            <span style={{'--i':'15'}} ></span>
            <span style={{'--i':'21'}} ></span>
            <span style={{'--i':'20'}} ></span>
            <span style={{'--i':'11'}} ></span>
            <span style={{'--i':'18'}} ></span>
            <span style={{'--i':'12'}} ></span>
            <span style={{'--i':'16'}} ></span>
            <span style={{'--i':'23'}} ></span>
            <span style={{'--i':'14'}} ></span>
            <span style={{'--i':'28'}} ></span>
            <span style={{'--i':'15'}} ></span>
            <span style={{'--i':'21'}} ></span>
            <span style={{'--i':'20'}} ></span>
            <span style={{'--i':'11'}} ></span>
            <span style={{'--i':'18'}} ></span>
            <span style={{'--i':'12'}} ></span>
            <span style={{'--i':'16'}} ></span>
            <span style={{'--i':'23'}} ></span>
            <span style={{'--i':'14'}} ></span>
            <span style={{'--i':'28'}} ></span>
            <span style={{'--i':'15'}} ></span>
            <span style={{'--i':'21'}} ></span>
            <span style={{'--i':'20'}} ></span>
            <span style={{'--i':'11'}} ></span>
            <span style={{'--i':'18'}} ></span>
            <span style={{'--i':'12'}} ></span>
            <span style={{'--i':'16'}} ></span>
            <span style={{'--i':'23'}} ></span>
            <span style={{'--i':'14'}} ></span>
            <span style={{'--i':'28'}} ></span>
            <span style={{'--i':'15'}} ></span>
            <span style={{'--i':'21'}} ></span>
            <span style={{'--i':'20'}} ></span>
            <span style={{'--i':'23'}} ></span>
          
        </div> */}
    </div>
  )
}

export default App