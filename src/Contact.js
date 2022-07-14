import React from 'react'
import './Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <div id="contact" className="contactContainer">
        <div className="contactWrapper">
            <div className="contactTitle"> 
                Get In Touch With Me
            </div>
            <div className='contactBody'>
                <div className='contactParagraph'>
                    I am always eager and excited to hear about unique and revolutionary ideas.
                    Feel free to contact me with whatever method is most convenient and we can 
                    make those ideas come to life. <br/><br/>
                </div>
                <div className='contactParagraph'>
                    I am also actively searching for full time positions, 
                    and would be grateful for any opportunity pertaining to my skillset. <br/><br/>
                </div>
            </div>
            <a href="mailto: kevinhinh9@gmail.com" className="contactButton">
                Say Hello
            </a>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact