import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './template/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>home</h1>} />
      </Routes>
      
    </>
  )
}

export default App
