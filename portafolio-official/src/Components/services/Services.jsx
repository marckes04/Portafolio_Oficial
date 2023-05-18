import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
    return (
        <section id='Services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Game Development</h3>
                    </div>
                
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Puzzle 2D Games</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p> 2D RPG Games</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Adventure 3D Games</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Platformer 2D Games</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>3D First Person Game</p>
                        </li>
                    </ul>
                </article>
                {/*End Of Game Development*/}

                <article className="service">
                    <div className="service__head">
                        <h3>WEB Development</h3>
                    </div>
                
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Web server</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Company Architecture</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Landscapes</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Website Style</p>
                        </li>
                    </ul>
                </article>
                {/*End Of WEB Development*/}
            
                <article className="service">
                    <div className="service__head">
                        <h3>Data Analytics</h3>
                    </div>
                
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Machine Learning</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Smart Data</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Big data</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Data Science</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Data Mining</p>
                        </li>
                    </ul>
                </article>
                {/* End Of Data Analytics*/}
            </div>

        </section>
    )
}

export default Services