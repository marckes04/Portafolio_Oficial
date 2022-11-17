import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFolderFill } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>+1 years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>+10 worlwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolderFill className="about__icon"/>
                            <h5>Projects</h5>
                            <small>+20 completed</small>
                        </article>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ipsa facere magni atque adipisci voluptatem quaerat est id 
                        dignissimos praesentium voluptates consequuntur ipsum aliquam, 
                        pariatur tempore ad! Recusandae ex vel molestiae! </p>
                    <a href="#Contact" className="btn btn-primary"> let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About