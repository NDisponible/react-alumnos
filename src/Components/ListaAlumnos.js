import React from 'react';
const ListaAlumnos = ({alumno, setAlumno, alumnos, setListaActualizada}) => {
    const handleDelete = (id) => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setListaActualizada(true)
    }
    let {nombre, apellidos, email} = alumno
    const handleUpdate = (id) => {
        if (nombre === '' || apellidos === '' || email === '') {
            alert ('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alumno)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setAlumno({
            nombre: '',
            apellidos: '',
            email: ''
        })
        setListaActualizada(true)
    }
    return ( 
        <table className='table table-responsive'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {alumnos.map(alumno => (
                <tr key={alumno.id}>
                    <td>{alumno.id}</td>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.apellidos}</td>
                    <td>{alumno.email}</td>
                    <td>
                        <button style={{margin: 2}} onClick={() => handleDelete(alumno.id)} className='btn btn-danger'>Eliminar</button>
                        <button style={{margin: 2}} onClick={() => handleUpdate(alumno.id)} className='btn btn-primary'>Actualizar</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
     );
}
 
export default ListaAlumnos;