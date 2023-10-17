import React from 'react'
import ME from "../../assets/my-profile/2289_SkVNQSBGQU1PIDEwMjgtMTIy.jpg"
import HeaderSocials from './HeaderSocials'
import './headernew.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='container__header'>
          <div className="header__title">
            <h5>Hello I'm</h5>
            <h1>Dhruv Jain</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
          </div>
          <div className="header__container">
            <HeaderSocials className="header__social" />
            <div className="me">
              <img src={ME} style={{ borderRadius: "50%" }} alt="me" className='me-img' />
            </div>
            <div className="scroll">
              <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header