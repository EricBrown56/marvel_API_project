import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BrowseCharacters from './components/BrowseCharacters'
import CharacterDetails from './components/CharacterDetails'
import Comics from './components/Comics'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/characters' element={<BrowseCharacters/>} />
        <Route path='/characters/:id' element={<CharacterDetails/>} />
        <Route path='/comics' element={<Comics/>} />

          {/* Needs to be at the bottom, it's a catch all */}
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </>
  )
};

export default App

