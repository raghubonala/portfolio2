import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div><h1 className='hea'>Contact</h1>
      <div className='malpas'>
        <div className='fo' >
          <input type="text" placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Your Name' />
          <input type="password" placeholder='Type Your Message' />
          <div className='submit'> <button className='btnsub'>Submit</button></div>
        </div>
        <div className='map'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30151.774619712753!2d72.87869799999999!3d19.152710449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b65a7edbbdb9%3A0xf447c38599143078!2sGoregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706374586224!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact