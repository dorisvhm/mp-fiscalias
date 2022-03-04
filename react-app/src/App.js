
import './App.css';


import React, { useState, useEffect } from "react";


import Fiscalias from './componentes/Fiscalias'
import AgregarFiscalia from './componentes/AgregarFiscalia';
import EditarFiscalia from './componentes/EditarFiscalia';


function App() {

  const [appLista, setAppLista] = useState([]);
  const [editando, setEditando] = useState(false);
  const estadoInicialFormularioEdicion = { id: null, nombre: '', telefono: '', direccion: '', idMunicipio: '1' };
  const [fiscaliaActual, setFiscaliaActual] = useState(estadoInicialFormularioEdicion);

  const agregarFiscalia = (fiscalia) => {
    fiscalia.id = appLista.length + 1;

    setAppLista([...appLista, fiscalia]);

    console.log(fiscalia);

    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(fiscalia)
    };
    fetch('http://localhost:8080/MpWb/webresources/fiscalia', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

  }

  const eliminarFiscalia = (id) => {
    setAppLista(appLista.filter((repo) => repo.id !== id));

    const requestOptions = {
      mode: 'cors',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify()
    };
    fetch('http://localhost:8080/MpWb/webresources/fiscalia/' + id, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const editarFiscalia = (fiscalia) => {
    setEditando(true);
    setFiscaliaActual({ id: fiscalia.id, nombre: fiscalia.nombre, telefono: fiscalia.telefono, direccion: fiscalia.direccion, idMunicipio: '1' });
  }

  const actualizarFiscalia = (id, fiscaliaActualizada) => {
    setEditando(false);
    const fiscaliasActualizados = appLista.map((repo) => (repo.id === id ? fiscaliaActualizada : repo));
    setAppLista(fiscaliasActualizados);

    const requestOptions = {
      mode: 'cors',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(fiscaliaActualizada)
    };
    fetch('http://localhost:8080/MpWb/webresources/fiscalia/' + id, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

  }

  useEffect(() => {

    const apiUrl = 'http://localhost:3000/fiscalias';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((dat) => {


        setAppLista(dat);
      });
  }, [setAppLista]);
  return (

    <div className="container">

      <div className="row">
        {editando ? (
          <div className="col-md-4">
            <h2>Editar Fiscalia</h2>
            <EditarFiscalia
              setEditando={setEditando}
              fiscaliaActual={fiscaliaActual}
              actualizarFiscalia={actualizarFiscalia}
            />
          </div>
        ) : (
          <div className="col-md-4">
            <h2>Agregar Fiscalia</h2>
            <AgregarFiscalia agregarFiscalia={agregarFiscalia} />
          </div>
        )}
        <div className="col-md-4">
          <h2>Fiscalias</h2>
          <Fiscalias datos={appLista} eliminarFiscalia={eliminarFiscalia} editarFiscalia={editarFiscalia} />

        </div>
      </div>
    </div>

  );


}





export default App;
