import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import kevNFT from './img/kevNFT.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  return (
    <div id="home" className='homeContainer'>
        <div className='centerDiv'>
            <div className='nameContainer'>KEVIN HINH</div>
            <div className="typewriterComponent">
                <Typewriter
                    options={{
                        strings: [
                            'hi, nice to meet you!', 
                            'my name is Kevin',
                            'I study computer science',
                            'I build interesting things',
                            'Hunter College Graduate',
                            'I make poor financial decisions',
                            'I buy digital photos of apes',
                            'Virgo',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
        <div className='downArrowContainer'>
            <a className="downArrowIcon" href="#about"><KeyboardArrowDownIcon className='downArrowElement'/></a>
        </div>
        <div className="imgContainer">
            <img src={kevNFT} alt="Kevin NFT"></img>
        </div>
    </div>
  )
}

export default Home