import React from 'react'
import './footer.css'
import{AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import{BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'> Mario </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portafolio">Home</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>


        <div className="footer__socials">
            <a href="https://www.facebook.com/"><AiFillFacebook></AiFillFacebook></a>
            <a href="https://www.instagram.com/"><FiInstagram></FiInstagram></a>
            <a href="https://www.linkedin.com/"><BsLinkedin></BsLinkedin></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; MARIO portafolio. All rights reserved. </small>
        </div>

        </footer>
    )
}

export default Footer