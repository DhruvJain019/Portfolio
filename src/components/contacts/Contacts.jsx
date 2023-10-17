import React from 'react'
import './contacts.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLogoTwitter } from 'react-icons/io'
import { IoLogoInstagram } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import './contacts.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react'

const Contacts = () => {
  const form = useRef();
  const [msg, setMsg] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
    .then((result) => {
      setMsg('Message send Successfully!!')
      setInterval(() => {
        setMsg("");
      }, 3000)
  }, (error) => {
    setMsg("Message Not Send")
  });
  e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Dhruv Jain</h5>
            <a href="dhruvjaincodes@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Dhruv</h5>
            <a href="https://twitter.com/dhruvjain_19" target='_blank' rel="noreferrer">Connect on Twitter</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Dhruv</h5>
            <a href="https://www.linkedin.com/in/dhruvjain19/" target='_blank' rel="noreferrer">Connect on LinkedIn</a>
          </article>
        </div>

        {/*End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            <p className='msg' id='msg'>{msg}</p>
        </form>
        
      </div>
    </section>
  )
}

export default Contacts