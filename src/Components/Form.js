import React from 'react';
const Form = ({alumno, setAlumno}) => {
    const handleChange = (e) => {
        setAlumno({
            ...alumno,
            [e.target.name]:e.target.value
        })
    }
    let {nombre, apellidos, email} = alumno
    const handleSubmit = () => {
        if (nombre === '' || apellidos === '' || email === '') {
            alert ('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alumno)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setAlumno({
            nombre: '',
            apellidos: '',
            email: ''
        })
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input onChange={handleChange} type='text' id='nombre' name='nombre' value={nombre} className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='apellidos' className='form-label'>Apellidos</label>
                <input onChange={handleChange} type='text' id='apellidos' name='apellidos' value={apellidos} className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input onChange={handleChange} type='text' id='email' name='email' value={email} className='form-control'/>
            </div>
            <button type='submit' className='btn btn-success'>Registrar</button>
        </form>
     );
}
 
export default Form;