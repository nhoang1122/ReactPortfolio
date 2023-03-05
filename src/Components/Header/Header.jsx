import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ME from '../../Assets/PhotoPic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Nhat Hoang</h1>
        <h5 className="text-light">Software Engineer</h5>

        <CallToAction />
        <HeaderSocials />

        <div>
          <img src={ME} alt="me" className="me"/>
        </div>

      </div>
    </header>
  )
}

export default Header