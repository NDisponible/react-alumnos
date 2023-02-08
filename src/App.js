import React, {Fragment, useState, useEffect} from 'react'; 
import Form from './Components/Form';
import ListaAlumnos from './Components/ListaAlumnos';
import Navbar from './Components/Navbar';
function App() {
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellidos: '',
    email: ''
  })
  const [alumnos, setAlumnos] = useState([])
  const [listaActualizada, setListaActualizada] = useState(false)
  useEffect(() => {
    const getAlumnos = () => (
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setAlumnos(res))
    )
    getAlumnos()
    setListaActualizada(false)
  }, [listaActualizada])
  return (
    <Fragment>
      <Navbar brand='Alumnos'/>
      <div className='container table-responsive'>
        <div className='row table-responsive'>
          <div className='col-8 table-responsive'>
            <h2 style={{textAlign: 'center'}}>Lista alumnos</h2>
            <ListaAlumnos alumno={alumno} setAlumno={setAlumno} alumnos={alumnos} setListaActualizada={setListaActualizada}/>
          </div>
          <div className='col-4 table-responsive'>
          <h2 style={{textAlign: 'center'}}>Registrar alumnos</h2>
          <Form alumno={alumno} setAlumno={setAlumno}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
