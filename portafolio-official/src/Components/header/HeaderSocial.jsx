import React from 'react'
import{BsLinkedin, BsInstagram} from 'react-icons/bs'
import './header.css'

import{AiFillGithub} from 'react-icons/ai'



const HeaderSocial = () => {
return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mario-esteban-espitia-martinez-5a065272/" target={'_blank'}>
        <BsLinkedin/>
        </a>
        <a href="https://github.com/marckes04" target={'_blank'}><AiFillGithub/></a>
        
        <a href="https://www.instagram.com/maresp95/" target={'_blank'}><BsInstagram/></a>
        
    </div>
    )
}

export default HeaderSocial