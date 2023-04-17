import React from 'react'
import '../Styles/Front.css'
import right from '../Assets/rightarrow.png'
import lol from '../Assets/lol.png'

function Front() {
  return (
    <div className="front">
        <div className='leftcontent'>
            <div className="dots">
                <span className="d1"></span>
                <span className="d2"></span>
                <span className="d3"></span>
            </div>
            <div className="frontText">
                <p className="title">
                    Cubex makes it <br /> easy to run your <br /> business.
                </p>
                <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> metus nunc, fermentum id ex non, dapibus hendrerit eros.</p>
            </div>
            <div className="get-started">
                <p>Get Started</p>
                <img src={right}/>
            </div>
        </div>

        <img src={lol} className='lol' />
    </div>
   
  )
}

export default Front