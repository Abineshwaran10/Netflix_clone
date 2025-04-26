import React from 'react'
import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'
import Facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={Youtube} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Inoformation</li>
        <li>Contact Us</li>
        </ul>
        <p className='copyright-text'> 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer