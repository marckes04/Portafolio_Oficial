import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='Contact'>

            <h5> Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <AiOutlineMail/>
                        <h4>Email</h4>
                        <a href="mailto: marckesblogs@gmail.com" target="blank"> Send a Message</a>
                    </article>

                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <a href="https://www.facebook.com/messages/t/100009264077278" target="target"> Send a Message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <a href="https://wa.me/+573134590442"> Send a Message</a>
                    </article>

                </div>
                {/*END OF CONTACT OPTION*/}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name'  required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>

            </div>


        </section>
    )
}

export default Contact
