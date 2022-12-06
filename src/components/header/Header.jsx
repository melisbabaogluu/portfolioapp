import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>name surname</h1>
        <h5 className="text-light">
          fullstack developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
      <a href="#contact" className='scroll__down'>Scroll down</a>
    </header>
  )
}

export default Header