import React from 'react'
import logo from '../Assets/Vector-1.png'
import star from '../Assets/Vector.png'
import arrow from '../Assets/arrowdown.png'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      

      <div className='navLinks'>
        <div className='logo-container'>
          <img src={logo} alt='logo'/>
          <div className="star">
            <img src={star}/>
          </div>
        </div>

        <p>Overview</p>

        <p>Home</p> 

        <p>About</p>

        <p>Pricing</p>

        <span>
          <p>
            Pages
          </p>
          <img src={arrow} />
        </span>

      </div>

      <div className='login-reg'>
        <div className="login">
          Login
        </div>

        <div className="register">
          Register
        </div>
      </div>

        

    </div>

  )
}

export default Navbar