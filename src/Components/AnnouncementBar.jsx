import React from 'react'
import '../Styles/AnnouncementBar.css'

function AnnouncementBar() {
  return (
    <div>
        <span className='leftDots'>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>
        <p>Use this announcement bar to inform visitors of something important.</p> 
        <span className='rightDots'>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>
    </div>
  )
}

export default AnnouncementBar