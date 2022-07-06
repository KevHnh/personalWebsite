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
            <div className='projectsBox one'>
                <div className='projectsBoxWrapper'>Ezsea</div>
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'>
                        <div className='projectsBoxDescription'>  
                            <div className='projectsBoxTitle'>Ezsea</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. <br/><br/> 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, 
                            and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://ezsea.netlify.app" target="_blank"><LanguageIcon></LanguageIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsBox two'>
                <div className='projectsBoxWrapper'>Solana Distributor</div>  
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'> 
                        <div className='projectsBoxDescription'>
                            <div className='projectsBoxTitle'>Solana Distributor</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon></GitHubIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsBox three'>
                <div className='projectsBoxWrapper'>NFT Wallet Verifier</div>
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'> 
                        <div className='projectsBoxDescription'>
                            <div className='projectsBoxTitle'>NFT Wallet Verifier</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon></GitHubIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsBox four'>
                <div className='projectsBoxWrapper'>ERC-721A NFT Minting Page</div>
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'> 
                        <div className='projectsBoxDescription'>
                            <div className='projectsBoxTitle'>ERC-721A NFT Minting Page</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon></GitHubIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsBox five'>
                <div className='projectsBoxWrapper'>Expense Tracker</div>
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'> 
                        <div className='projectsBoxDescription'>
                            <div className='projectsBoxTitle'>Expense Tracker</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon></GitHubIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsBox six'>
                <div className='projectsBoxWrapper'>COVID-19 Tracker</div>
                <div className='projectsBoxDescriptionContainer'>
                    <div className='projectboxDescriptionWrapper'> 
                        <div className='projectsBoxDescription'>
                            <div className='projectsBoxTitle'>COVID-19 Tracker</div>
                            An online learning platform where learners and educators get rewarded for their hardwork and contribution. 
                            Platform encourages users to create lessons using a document builder on any topic of subject they excel at, and explore an endless variety of potential interests and career paths. 
                            Users’ statistics are tracked and verified users are eligible for weekly Solana payouts. 
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon></GitHubIcon></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects