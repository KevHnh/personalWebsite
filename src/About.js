import React from 'react'
import './About.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <div id="about" className="aboutContainer">
        <div className="aboutWrapper">
            <Slider {...settings}>
                <div className="aboutWrapper">
                    <div className="listCenter">
                        <div className="aboutText" >
                            <b>Hello there!</b> <br/> <br/>
                            My name is <b>Kevin Hinh</b>. <br/>
                            I <b>skillfully</b> push buttons on my keyboard.
                        </div>
                    </div>
                </div>
                <div className="aboutWrapper">
                    <div className="listCenter">
                        <div className="aboutText">
                            For the most part, I am a <b>full stack developer</b>. 
                            I enjoy expressing my creativity through <b>frontend design</b> 
                            &nbsp;and working through technical challenges while implementing 
                            efficient <b>backend systems</b>. A <b>jack of all trades</b> if you will.
                        </div>
                    </div>
                </div>
                <div className="aboutWrapper">
                    <div className="aboutText last">
                        10 <b>technologies</b> I <b>enjoy</b> working with:
                        <div className="listCenter">
                            <ul className='listContainer'>
                                <li>HTML</li>
                                <li>CSS</li>  
                                <li>JavaScript</li> 
                                <li>React</li> 
                                <li>MongoDB</li> 
                                <li>Node.js</li> 
                                <li>Express.js</li> 
                                <li>C++</li> 
                                <li>Python</li> 
                                <li>Solidity</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default About