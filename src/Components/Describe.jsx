import React from 'react'
import '../Styles/Describe.css'
import right from '../Assets/rightarrow.png'
import hot from '../Assets/hot.png'

function Describe() {
  return (
    <div className="describe">
        <div className="desctext">
            <p className='title'>Describe your <br /> products for <br /> all customers</p>
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

        <img src={hot} alt="" className="descimg" />
        
    </div>
  )
}

export default Describe