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
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
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
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
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
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* End Of Data Analytics*/}
            </div>

        </section>
    )
}

export default Services