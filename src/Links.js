import React from 'react'
import './Links.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

function Links() {
  return (
    <div id="link" className="linksContainer">
        <div className="linksWrapper">
            <a href="https://www.linkedin.com/in/kevin-hinh/" target="_blank"><LinkedInIcon className="iconElements" style={{fontSize: '1.75vw'}}/></a>
            <a href="https://github.com/KevHnh" target="_blank"><GitHubIcon className="iconElements" style={{fontSize: '1.75vw'}}/></a>
            <a href="https://twitter.com/SOLWeave" target="_blank"><TwitterIcon className="iconElements" style={{fontSize: '1.75vw'}}/></a>
            <a href="mailto: kevinhinh9@gmail.com" target="_blank"><MailIcon className="iconElements" style={{fontSize: '1.75vw'}}/></a>
            <div className='lineBlock'></div>
        </div>

    </div>
  )
}

export default Links