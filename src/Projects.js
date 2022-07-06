import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
  return (
    <div id="projects" className='projectsContainer'>
        <div className="projectsTitle">
            Some things I’ve built
        </div>
        <div className="projectsSection">
            <div className="projectsCard">
                <div className="projectsTitleSection">
                    <div className="projectsTitleWrapper">
                        <div>Ezsea</div>
                        <div>Jan 2022 - May 2022</div>
                        <a className="webIcon" href="https://ezsea.netlify.app" target="_blank"><LanguageIcon></LanguageIcon></a>
                    </div>
                </div>
                <div className="projectsDescriptionSection"> 
                    <div className="projectsDescriptionWrapper"> 
                        <div className="projectsDescriptionText">
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                        </div>
                        <div className="projectsDescriptionTools">
                            <ul className='toolsContainer'>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects