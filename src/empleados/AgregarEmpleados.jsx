import React from 'react'
import { Link } from 'react-router-dom'

export default function AgregarEmpleados() {
    return (
        <div className='container mx-auto max-w-5xl py-12'>

            <div className='flex justify-center items-center'>
                <h3 className='text-xl md:text-3xl py-6'>Agregar Empleado</h3>
            </div>

            <form className="mx-auto">
                <div className="mb-5">
                    <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre del empleado </label>
                    <input type="text" id="nombre" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="departamento" className="block mb-2 text-sm font-medium text-gray-900">Nombre del departamento</label>
                    <input type="text" id="departamento" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="mb-5">
                    <label for="sueldo" className="block mb-2 text-sm font-medium text-gray-900">Sueldo del empleado</label>
                    <input type="number" id="sueldo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                
                <button type="submit" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Agregar Empleado</button>
                <Link to="/" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancelar</Link>
            </form>

        </div>
    )
}
