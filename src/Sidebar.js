import React from 'react';
import img from './images/mypic.jpg';
import { useNavigate  } from 'react-router-dom';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Box from '@mui/material/Box';


function Sidebar({ setMode,mode }) {
    const navigate = useNavigate();
    let color =(mode==="light" ? "rgb(134, 99, 230)" : "light")
    return   <Box
    sx={{
      '& > :not(style)': {
      background: color
      },
    }}
  >
    <div className='sidebar-container' >

<img src={img} alt='' id='img'></img>
<div>
    <div className='text' onClick={()=>navigate('about')}> About </div>
    <div className='text' onClick={()=>navigate('education')}> Education </div>
    <div className='text' onClick={()=>navigate('skills')}> Skills </div>
    <div className='text' id='text-last' onClick={()=>navigate('interests')}> interests </div>
    <Button color="inherit" sx={{marginLeft:"auto"}}
onClick={() => setMode(mode==="light" ? "dark" : "light")}>

{mode=== "light" ? <NightlightIcon/> : <LightModeIcon/>} </Button>
</div>
</div>
  
  </Box>
    
    
    
    
    ;
}
export default Sidebar;
