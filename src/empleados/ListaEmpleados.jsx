import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'

export default function ListaEmpleados() {

    const urlBase = "http://localhost:8080/rh-api/empleados"

    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
        cargarEmpleados()
    }, [])

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase)
        setEmpleados(resultado.data)
    }

    return (
        <div>
            <div className='container mx-auto max-w-5xl py-12'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-xl md:text-3xl font-semibold py-6'>Sistema de Recursos Humanos</h1>
                </div>


                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Empleado
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Departamento
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Sueldo
                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                // iteramos los empleados

                                empleados.map((empleado, index) => (
                                    <tr class="bg-white border-b " key={index}>
                                        <th class="px-6 py-4 font-medium text-gray-900">
                                            {empleado.nombre}
                                        </th>
                                        <td class="px-6 py-4">
                                            {empleado.departamento}
                                        </td>
                                        <td class="px-6 py-4">
                                            <NumericFormat value={empleado.sueldo}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'} />
                                        </td>
                                        <td class="px-6 py-4">
                                            <button>Editar</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
