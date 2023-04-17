import React from 'react'
import right from '../Assets/rightarrow.png'
import hot from '../Assets/hot.png'
import '../Styles/Customize.css'

function Customize() {
  return (
    <div className='cust'>
        <img src={hot} alt="" className="custimg" />
        <div className="custtext">
            <p className='title'>Customize the <br /> template to <br /> suit any brand</p>
            <ul>
                <li>Add a feature section about the product.</li>
                <li>Add a feature section about the product.</li>
                <li>Add a feature section about the product.</li>
            </ul>
            <div className="getstarted">
                <p>Get Started</p>
                <img src={right}/>
            </div>
        </div>

    </div>
  )
}

export default Customize
