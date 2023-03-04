import React from 'react'
import TeamSlider from './TeamSlider'
import Menubar from '../Menubar/Menubar';
import MobTeam from './MobTeam';
const Team = () => {
  
  return (
   <>
   
   <div  className='mob-slider'>

<h1 className="mt-5 text-center main-heading">Our Heads</h1>
       
<MobTeam/>
</div>
   <div  className='team-slider'>

   <h1 className="mt-5 text-center main-heading">Our Heads</h1>
          
   <TeamSlider/>
   </div>
   </>
  )
}

export default Team
