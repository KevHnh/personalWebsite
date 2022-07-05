import React, {useState} from 'react'
import './Projects.css'

function Projects() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);  
    const [isActive3, setIsActive3] = useState(false);  
    const [isActive4, setIsActive4] = useState(false);  
    const [isActive5, setIsActive5] = useState(false);  
    const [isActive6, setIsActive6] = useState(false);  

    const handleClick1 = () => {
        setIsActive1(current => !current);
    };

    const handleClick2 = () => {
        setIsActive2(current => !current);
    };

    const handleClick3 = () => {
        setIsActive3(current => !current);
    };

    const handleClick4 = () => {
        setIsActive4(current => !current);
    };

    const handleClick5 = () => {
        setIsActive5(current => !current);
    };

    const handleClick6 = () => {
        setIsActive6(current => !current);
    };

  return (
    <div id="projects" className='projectsContainer'>
        <div className="projectsTitle">
            Some things I’ve built
        </div>
        <div className="projectsSection">
            <div className='projectsBox one' onClick={handleClick1} style={{position: isActive1 ? 'absolute' : '', width: isActive1 ? '1040px' : '', height: isActive1 ? '656px' : '', zIndex: isActive1 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>Ezsea</div>
            </div>
            <div className='projectsBox two' onClick={handleClick2} style={{position: isActive2 ? 'absolute' : '', width: isActive2 ? '1040px' : '', height: isActive2 ? '656px' : '', zIndex: isActive2 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>Solana Distributor</div>    
            </div>
            <div className='projectsBox three' onClick={handleClick3} style={{position: isActive3 ? 'absolute' : '', width: isActive3 ? '1040px' : '', height: isActive3 ? '656px' : '', zIndex: isActive3 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>NFT Wallet Verifier</div>
            </div>
            <div className='projectsBox four' onClick={handleClick4} style={{position: isActive4 ? 'absolute' : '', width: isActive4 ? '1040px' : '', height: isActive4 ? '656px' : '', zIndex: isActive4 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>ERC-721A Smart Contract</div>
            </div>
            <div className='projectsBox five' onClick={handleClick5} style={{position: isActive5 ? 'absolute' : '', width: isActive5 ? '1040px' : '', height: isActive5 ? '656px' : '', zIndex: isActive5 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>Expense Tracker</div>
            </div>
            <div className='projectsBox six' onClick={handleClick6} style={{position: isActive6 ? 'absolute' : '', width: isActive6 ? '1040px' : '', height: isActive6 ? '656px' : '', zIndex: isActive6 ? '100' : ''}}>
                <div className='projectsBoxWrapper'>COVID-19 Tracker</div>
            </div>
        </div>
    </div>
  )
}

export default Projects