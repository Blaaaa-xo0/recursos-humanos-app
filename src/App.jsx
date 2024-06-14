import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './template/Navbar'
import ListaEmpleados from './empleados/ListaEmpleados'
import AgregarEmpleados from './empleados/AgregarEmpleados'
import EditarEmpleados from './empleados/EditarEmpleados'


function App() {
  

  return (
    <>
      
      <Navbar />
      <Routes>

        <Route path='/' element={<ListaEmpleados/>} />
        <Route path='/agregar' element={<AgregarEmpleados/>} />
        <Route path='/editar/:id' element={<EditarEmpleados/>} />
        
      </Routes>
      
    </>
  )
}

export default App
