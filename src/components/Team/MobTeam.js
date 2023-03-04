import React from 'react'
import './Team.css'
import { TeamData } from "./Teamdata";
import { FaFacebook,FaInstagram,FaLinkedinIn} from "react-icons/fa";
export const MobTeam = () => {
  return (
    <div className="container">
  
    <div className="mob-row">
     
        
            {TeamData.map(user => (
          <div className="profile-card">
          <div className="profile-content">
              <div className="profile-image">
                  <img  alt="head-pic" className="mob-img"src={user.imgSrc}/>
              </div>
              <div className="desc">
                  <h2>{user.HeadName}</h2>
                  <p>{user.title}</p>
              </div>
              
              <div className="mob-social-links">
                <a href={user.faLink} target="_blank" ><FaFacebook  className="social-media-icon"/></a>
                <a href={user.instaLink} target="_blank"><FaInstagram className="social-media-icon"/></a>
                <a href={user.linkedinLink} target="_blank" ><FaLinkedinIn className="social-media-icon"/></a>
                </div>
          </div>
          </div>
        ))} 
        
       
        
       
       
        
        
        
       
        
    </div>
</div>
  )
}

export default MobTeam