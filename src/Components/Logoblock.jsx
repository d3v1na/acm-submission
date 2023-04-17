import React from 'react'
import '../Styles/Logoblock.css'
import logo1 from '../Assets/logo1.png'
import logo2 from '../Assets/logo2.png'
import logo3 from '../Assets/logo3.png'
import logo4 from '../Assets/logo4.png'
import logo5 from '../Assets/logo5.png'
import logo6 from '../Assets/logo6.png'

function Logoblock() {
  return (
    <div className="logoblock">
        <img src= {logo1}/>
        <div className='vl'></div>
        <img src= {logo2}/>
        <div className='vl'></div>
        <img src= {logo3}/>
        <div className='vl'></div>
        <img src= {logo4}/>
        <div className='vl'></div>
        <img src= {logo5}/>
        <div className='vl'></div>
        <img src= {logo6}/>
    </div>
  )
}

export default Logoblock