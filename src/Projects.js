import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
    return (
    <div id="projects" className='projectsContainer'>
        <div className="projectsTitle">
            Some Recent Projects
        </div>
        <div className="projectsSection">
            <div className="projectsPadding"></div>
            <div className="projectsSectionColumn">

                <div className="projectsCard">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>Ezsea</div>
                            <div className='projectDate'>Jan 2022 - May 2022</div>
                            <a className="webIcon" href="https://ezsea.netlify.app" target="_blank"><LanguageIcon style={{fontSize:"1.25vw"}}></LanguageIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDesc" className="projectsDescriptionSection"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                An <b>online learning platform</b> where learners and educators get rewarded for their hardwork and contribution.<br/> <br/>
                                Platform encourages users to create lessons using a document builder on any topic or subject they excel at, and explore the endless variety of potential interests and career paths. <br/><br/> 
                                Users’ statistics are tracked and verified users are eligible for weekly payouts in <b>Solana</b>. <br/> <br/>
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools used: </div>
                                <ul className='toolsContainer'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Express</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectsCardR">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>NFT Wallet Verifier</div>
                            <div className='projectDate'>Apr 2022 - Apr 2022</div>
                            <a className="webIcon" href="https://nftwalletverifier.netlify.app/" target="_blank"><LanguageIcon style={{fontSize:"1.25vw"}}></LanguageIcon></a>
                            <a className="webIcon" href="https://github.com/KevHnh/NFT-Wallet-Verifier" target="_blank"><GitHubIcon style={{fontSize:"1.25vw"}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDescR" className="projectsDescriptionSectionR"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                A reuseable and configurable web component that allows users to connect their <b>Solana</b> NFT wallet(s) and verify their ownership of an NFT. <br/><br/>
                                Designed for developers that seek to create an environment strictly for holders of a specific NFT.<br/><br/>
                                The component can also be hooked up to a database to store specific metadata of the NFT, the user's wallet address, and more. <br/><br/>
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools used: </div>
                                <ul className='toolsContainer'>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Solana packages</li>
                                    <li>web3.js</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>Express</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectsCard">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>Solana Distributor</div>
                            <div className='projectDate'>Mar 2022 - Mar 2022</div>
                            <a className="webIcon" href="https://github.com/KevHnh/solana_distributor" target="_blank"><GitHubIcon style={{fontSize:"1.25vw"}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDesc" className="projectsDescriptionSection"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                A program that mass distributes Solana to any amount of wallet addresses. The program is designed to take in an array containing the receiving wallet addresses, and an array containing the amount of Solana going to each wallet address. <br/><br/>
                                An extremely straightforward program that strives to automate and optimize the payment process of companies or workplaces that pay their workers in crypto (Solana).<br/><br/>
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools used: </div>
                                <ul className='toolsContainer'>
                                    <li>Typescript</li>
                                    <li>web3.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectsCardR">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>ERC-721A Minting Page</div>
                            <div className='projectDate'>Jun 2022 - Jul 2022</div>
                            <a className="webIcon" href="https://github.com/KevHnh/DiveDolphins" target="_blank"><GitHubIcon style={{fontSize:"1.25vw"}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDescR" className="projectsDescriptionSectionR"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                An NFT minting website built using <a href="https://www.erc721a.org/" target="_blank"><b>ERC721A</b></a>, "an improved implementation of the IERC721 standard that supports minting multiple tokens for close to the cost of one."<br/><br/>
                                Standard Solidity NFT minting smart contract with toggleable sale states, <a href="https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9" target="_blank"><b>Merkle Proof</b></a> whitelist verification, and art reveal functionality.<br/><br/> 
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools Used: </div>
                                <ul className='toolsContainer'>
                                    <li>React.js</li>
                                    <li>Solidity</li>
                                    <li>Hardhat</li>
                                    <li>MerkleTree.js</li>
                                    <li>openzeppelin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectsCard">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>Expense Tracker</div>
                            <div className='projectDate'>Feb 2022 - Feb 2022</div>
                            <a className="webIcon" href="https://speechly-expensetracker.netlify.app/" target="_blank"><LanguageIcon style={{fontSize:"1.25vw"}}></LanguageIcon></a>
                            <a className="webIcon" href="https://github.com/KevHnh/Expense-Tracker/" target="_blank"><GitHubIcon style={{fontSize:"1.25vw"}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDesc" className="projectsDescriptionSection"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                A web application that lets users keep track of their income and expenses. The user's inputted data are also displayed on a pie chart to better
                                visualize their spending and their earnings. <br/><br/>
                                The web application also uses the <a href="https://www.speechly.com/" target="_blank"><b>Speechly</b></a> API to allow users to submit an input through speech instead of manually typing it out. <br/><br/>
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools Used: </div>
                                <ul className='toolsContainer'>
                                    <li>React.js</li>
                                    <li>chart.js</li>
                                    <li>speechly API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectsCardR">
                    <div className="projectsTitleSection">
                        <div className="projectsTitleWrapper">
                            <div className='projectName'>COVID-19 Tracker</div>
                            <div className='projectDate'>Feb 2022 - Feb 2022</div>
                            <a className="webIcon" href="https://bovid19-tracker.netlify.app/" target="_blank"><LanguageIcon style={{fontSize:"1.25vw"}}></LanguageIcon></a>
                            <a className="webIcon" href="https://github.com/KevHnh/covid-19-tracker" target="_blank"><GitHubIcon style={{fontSize:"1.25vw"}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div id="projectCardDescR" className="projectsDescriptionSectionR"> 
                        <div className="projectsDescriptionWrapper"> 
                            <div className="projectsDescriptionText">
                                A web application that showcases the statistics of COVID-19 and provides relevant articles so users can stay up to date with how the disease is affecting the world. <br/><br/>
                                The web application also contains filters so the user can find the specific number of different categories by country. <br/><br/>
                                The data and articles are called from the <a href="https://disease.sh/" target="_blank"><b>disease.sh</b></a> API and <a href="https://newsdata.io/" target="_blank"><b>newsdata.io</b></a> API.
                            </div>
                            <div className="projectsDescriptionTools">
                                <div>Tools Used: </div>
                                <ul className='toolsContainer'>
                                    <li>React.js</li>
                                    <li>disease.sh API</li>
                                    <li>newsdata.io API</li>
                                    <li>chart.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="projectsPadding"></div>
        </div>
        
    </div>
  )
}

export default Projects