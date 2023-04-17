import React from 'react'
import '../Styles/Infoblock.css'
import icon1 from '../Assets/icon1.png'
import icon2 from '../Assets/icon2.png'
import icon3 from '../Assets/icon3.png'

function Infoblock() {
  return (
    <div>
        <div className="infoblock">
            <div className="info1">
                <img className='iconinfo' src={icon1}/>
                <p>Save time and build better <br /> with Cubex Template.</p>
            </div>
            <div className='vll'></div>

            <div className="info2">
                <img className='iconinfo' src={icon2}/>
                <p>Easy to edit and customize <br /> for your own projects.</p>
            </div>
            <div className='vll'></div>

            <div className="info3">
                <img className='iconinfo' src={icon3}/>
                <p>Deliver an enterprise <br /> quality project in minutes.</p>
            </div>
        </div>
    </div>
  )
}

export default Infoblock