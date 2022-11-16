import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{BsFolderFill} from 'react-icons/bs'

const About = () => {
    return (
    <section id ='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <img src={ME} alt="About Image" />
            </div>
        <div className="about__content">    

        </div>
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>1+ Year Working</small>
                </article>
                <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>10+ Clients worldWide</small>
                </article>
                <article className='about__card'>
                    <BsFolderFill className='about__icon'/>
                    <h5>Projects</h5>
                    <small>15+ projects completed</small>
                </article>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptate autem quae quisquam, quaerat sed esse iste illum 
                    illo voluptatem rerum soluta nisi? Error, placeat nemo. 
                    Tempore natus amet officiis nostrum?
                </p>

                <a href="#Contact" className='btn btn-primary'>Let's talk</a>

            </div>
        </div>

    </section>
    )
}

export default About