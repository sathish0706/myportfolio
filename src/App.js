import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import About from './About';
import Education from './Education'
import Interests from './Interests';
import { Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';


function App () {
      const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
  palette: {
    mode: mode,
  }}
  )
    return (<ThemeProvider theme={darkTheme}> <Paper><div className='App'>
        
        <Sidebar setMode={setMode} mode={mode}/>
        
        <Routes>
        
            <Route path='about' element={<About />} />
            <Route path='education' element={<Education />} />
            <Route path='interests' element={<Interests />} />
            <Route path='skills' element={<Skills />} />

        </Routes>

        
        
        
    </div>
    </Paper>
    </ThemeProvider>
    )
}
export default App;


