import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Fotoor = () => {
  return (
    <div className='footer'>
      <div className='ab'><h1 >Raghu Bonala</h1>
        <h1>raghubonala1@gmail.com</h1>
        <h1>Made With Squarespace</h1></div>
      <div className='io'>
        <div><h1 className='cont'>Contact</h1></div>
        <div className='social'><div className='con'><div><FontAwesomeIcon className='cal' fontSize={30} icon={faPhone} /></div> <div>+91826866658</div></div>
        <div className='con'><div><FontAwesomeIcon className='inst' fontSize={30} icon={faInstagram} /></div><div>raghu_bonala</div></div>
        <div className='con'><div><FontAwesomeIcon className='fb' fontSize={30} icon={faFacebook} /></div> <div>Raghu Bonala</div></div>
        <div className='con'><div><FontAwesomeIcon className='twi' fontSize={30} icon={faTwitter} /></div><div>@raghubonala</div></div></div>
      </div>
    </div>
  )
}

export default Fotoor