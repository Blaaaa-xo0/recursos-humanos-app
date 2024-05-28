import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AgregarEmpleados() {

    let navigation = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    })

    const {nombre, departamento, sueldo} = empleado

    const onInputChange = (e) => {
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {

        e.preventDefault()
        const urlBase = "http://localhost:8080/rh-api/empleados/create"
        await axios.post(urlBase, empleado);

        navigation('/')
    }

    return (
        <div className='container mx-auto max-w-5xl py-12'>

            <div className='flex justify-center items-center'>
                <h3 className='text-xl md:text-3xl py-6'>Agregar Empleado</h3>
            </div>

            <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
                <div className="mb-5">
                    <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre del empleado </label>
                    <input type="text" name='nombre' id="nombre" value={nombre} onChange={(e) => onInputChange(e)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Jonh Doe" required />
                </div>
                <div className="mb-5">
                    <label for="departamento" className="block mb-2 text-sm font-medium text-gray-900">Nombre del departamento</label>
                    <input type="text" name='departamento' id="departamento" value={departamento} onChange={(e) => onInputChange(e)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='contabilidad' required />
                </div>
                <div className="mb-5">
                    <label for="sueldo" className="block mb-2 text-sm font-medium text-gray-900">Sueldo del empleado</label>
                    <input type="number" name='sueldo' id="sueldo" value={sueldo} onChange={(e) => onInputChange(e)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='2000000' required />
                </div>
                
                <button type="submit" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Agregar Empleado</button>
                <Link to="/" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancelar</Link>
            </form>

        </div>
    )
}
