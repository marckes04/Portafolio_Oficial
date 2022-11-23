import React from 'react'
import './experience.css'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript,SiApachemaven,SiFirebase,SiUnity,SiCsharp} from 'react-icons/si'
import { FaReact, FaJava,FaPython} from 'react-icons/fa'
import{GrOracle,GrMysql} from 'react-icons/gr'
import {IoLogoNodejs} from 'react-icons/io'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsFillBootstrapFill />
              <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <FaReact />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

          {/*End Of Front-End*/}
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <IoLogoNodejs/>
            <div>
            <h4>NodeJs</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <FaJava/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <SiApachemaven/>
            <div>
              <h4> Apache Maven</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        {/*End Of Back-End*/}

        <div className="experience__data">
          <h3> DataAnalytics Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaPython/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiFirebase/>
            <div>
              <h4>FireBase</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            
            </article>

            <article className='experience__details'>
              <GrOracle/>
              <div>
              <h4> Oracle</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql/>
              <div>
              <h4> MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/*Experience Data Analytics*/}
        <div className="Experience_">
          <h3>Game Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <SiUnity/>
            <div>
              <h4>Unity</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiCsharp/>
            <div>
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        
        </div>
        
      </div>
    </section>
  )
}

export default Experience