import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

function About () {


    return<div className="about-container">
    <h1 className="name">Sathish R</h1>
    <div className="about-details">
    <div>Address :</div>
    <div>
        2/101,
        North street,
        Melamathur,
        Keelamathur post,
        Sirkali Tk,
        Mayiladudurai Dt,
        609116
    </div><br/>
    <div>Phone No: </div>
    <div>6380819767</div><br/>
    <div>Email :</div>
     <div>Sathishramalingam06@gmail.com</div><br/>
     </div>
     <div id="about-content">i feel my skills and experience will transfer well into  this career for future growth potential and new challenges.
    </div>
    <div className="icons">
    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/sathish.ram.50364">
    <FacebookRoundedIcon className="icon1" sx={{fontSize:70}} color="primary" />
    </a>
    <a target='_blank' rel="noreferrer" href="https://github.com/sathish0706">
    <GitHubIcon className="icon2" sx={{fontSize:62, marginLeft:4, color:'black'}}/>
    </a>
    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sathish-r-679a1a222/">
    <LinkedInIcon className="icon3" sx={{fontSize:62, marginLeft:4}}/>
    </a>
    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/">
    <InstagramIcon className="icon4" sx={{fontSize:62, color: 'pink', marginLeft:4}}  />
    </a>
    </div>
    </div>
    
}
export default About;