import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'>
                    <div>
                        <h2>Kayla Padilla</h2>
                    </div>
                </div>
                <div className='menu'>
                    <div className='linktag'>
                        <Link to="/contact">Contact</Link>
                        <Link>Media</Link>
                        <Link>Projects</Link>
                        <Link>Resume</Link>
                        <Link>Resources</Link>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar