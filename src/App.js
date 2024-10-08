import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Myself from './Components/MySelf/Myself'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './App.css'
function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <Navbar />
      <Myself/>
      <div className='scroll-to-top' onClick={() => window.scrollTo(0, 0)} behavior="smooth">
        <KeyboardDoubleArrowUpIcon fontSize='large'/>
        </div>
      
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App