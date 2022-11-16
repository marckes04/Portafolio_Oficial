import React from 'react'
import './nav.css'
import{AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import{BiBookBookmark} from 'react-icons/bi'
import{RiServiceFill, RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#') 

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
            <a href="#Services" onClick={() => setActiveNav('#Services')} className = {activeNav === '#Services' ? 'active' : ''}><RiServiceFill/></a>
            <a href="#Contact"onClick={() => setActiveNav('#Contact')} className = {activeNav === '#Contact' ? 'active' : ''}><RiContactsLine/></a>
        </nav>
    )
}

export default Nav