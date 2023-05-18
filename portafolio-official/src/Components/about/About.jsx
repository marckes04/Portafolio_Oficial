import React from 'react'
import './about.css'
import ME from '../../assets/MyPs.PNG'
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
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>+1 years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>+10 worlwide</small>
                        </article>

                        <article className="about__card">
                            <BsFolderFill className="about__icon" />
                            <h5>Projects</h5>
                            <small>+20 completed</small>
                        </article>
                    </div>
                    <p>
                        Game Developer with 3 years of experience using technologies such as C# and Unity game engine.
                        In this development I have worked on projects related to 2D platformer environments, RPG, puzzle
                        games, 3D games among others.
                        Developed on different platforms such as Online WEB and mobile WEB. Optimized environments.
                        Data analytics with 2 years of experience using Python as a programming language to carry out
                        machine learning processes applied to financial data, using supervised and unsupervised learning
                        in intelligent analysis processes in datasets.


                        I consider myself to be a pro-active person who always seeks to learn new things in a work environment. 
                        I like to work in a team because I can share ideas with my colleagues because that way we can propose 
                        creative solutions and obtain better results in the development of a common project. I love working 
                        remotely and with languages ​​with which I have experience applied to real projects that are represented
                        worldwide, so I will be happy to find these types of opportunities.

                        If you are interested in my profile you can contact me at the following email maresp95@gmail.com


                    </p>
                    <a href="#Contact" className="btn btn-primary"> let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About