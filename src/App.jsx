import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import WrongPath from './components/WrongPath'
import Team from './components/Team'
import Company from './components/Company'
import History from './components/History'
import Members from './components/Members'
import MemberDetail from './components/MemberDetail'

function App() {

  return (
    <>
     <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/member' element={<Members/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/members/:memberId' element={<MemberDetail/>}/>
        <Route path='/history' element={<History/>}> 
          <Route path='team' element={<Team  />}/>
          <Route path='company' element={<Company />}/>
        </Route>
        <Route path='*' element={<WrongPath />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
