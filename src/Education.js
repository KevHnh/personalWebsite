import React from 'react'
import './Education.css'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

function Education() {
  return (
    <div id="education" className="educationContainer">
      <div className="educationWrapper">
        <div className="educationTitleContainer"> 
          What I've Studied
        </div>
        <div className='educationBodyWrapper'>
          <div className="educationBodyContainer">
            <div className="educationBodyHeader">
              Hunter College - Relevant Coursework
            </div>
            <div className="educationBodySection">
              <ul className="educationColumnSection">
                <li>Intro to Computer Science</li>
                <li>Software Analysis and Design I, II, III</li>
                <li>Discrete Structures</li>
                <li>Computer Theory I</li>
                <li>Computer Architecture I, II</li>
                <li>Logic and Computers</li>
                <li>Intro to Data Science</li>
                <li>Relational Databases and SQL Programming</li>
                <li>Operating Systems</li>
                <li>Flutter App Development</li>
                <li>Practical Web Development</li>
              </ul>
            </div>
            <div className="educationBodyHeader">
              Certifications
            </div>
            <div className="educationBodySection">
              <ul className="educationColumnSection two">
                <li>
                    Responsive Web Design <a href="https://www.freecodecamp.org/certification/kevhnh/responsive-web-design" target="_blank"><AssignmentTurnedInOutlinedIcon className="certificateIcon" style={{fontSize:"1.25rem"}}></AssignmentTurnedInOutlinedIcon></a>
                </li>

                <li>
                    JavaScript Algorithms and Data Structures <a href="https://www.freecodecamp.org/certification/KevHnh/javascript-algorithms-and-data-structures" target="_blank"><AssignmentTurnedInOutlinedIcon className="certificateIcon" style={{fontSize:"1.25rem"}}></AssignmentTurnedInOutlinedIcon></a>
                </li>
              
                <li>
                    JPMorgan Chase & Co. Virtual Internship <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_BndfKY8Hr3Wa8gWeG_1653698886462_completion_certificate.pdf" target="_blank"><AssignmentTurnedInOutlinedIcon className="certificateIcon" style={{fontSize:"1.25rem"}}></AssignmentTurnedInOutlinedIcon></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education