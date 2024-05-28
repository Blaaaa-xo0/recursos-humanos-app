import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './template/Navbar'
import ListaEmpleados from './empleados/ListaEmpleados'
import AgregarEmpleados from './empleados/AgregarEmpleados'


function App() {
  

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<ListaEmpleados/>} />
        <Route path='/' element={<AgregarEmpleados/>} />
      </Routes>
      
    </>
  )
}

export default App
