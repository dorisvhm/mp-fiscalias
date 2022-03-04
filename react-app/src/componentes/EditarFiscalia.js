import React, { useState } from 'react';

const EditarFiscalia = (props) => {

    const [fiscalia, setFiscalia] = useState(props.fiscaliaActual);

    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setFiscalia({ ...fiscalia, [name]: value });
      }

  return (
    <form
    onSubmit={(event) => {
        event.preventDefault();
        props.actualizarFiscalia(fiscalia.id, fiscalia);
      }}
    >
      <div className="form-group">
        <label>Nombre</label>
        <input id="nombre" className="form-control" type="text" name="nombre" value={fiscalia.nombre}
          onChange={gestionarCampo} />
      </div>
      <div className="form-group">
        <label>Telefono</label>
        <input id="telefono" className="form-control" type="tel" name="telefono"  value={fiscalia.telefono}
          onChange={gestionarCampo}/>
      </div>
      <div className="form-group">
        <label>Dirección</label>
        <input id="direccion" className="form-control" type="text" name="direccion" value={fiscalia.direccion} onChange={gestionarCampo}/>
      </div>
      <div className="form-group">
        <label>Municipio</label>
        <input id="idMunicipio" className="form-control" type="text" name="idMunicipio" value="GUATEMALA"  onChange={gestionarCampo}/>
      </div>
      
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Editar fiscalia</button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => props.setEditando(false)}
        >
            Cancelar
        </button>
      
      </div>
    </form>
  )
}

export default EditarFiscalia;