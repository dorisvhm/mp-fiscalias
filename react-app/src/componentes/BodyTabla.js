import React from 'react';

const BodyTabla = (props) => {
    const filas = props.datosFiscalias.map((fila, indice) => {
      return (
        <tr key={indice}>
          <td>{fila.nombre}</td>
          <td>{fila.telefono}</td>
          <td>{fila.direccion}</td>
          <td>{fila.municipio}</td>
          <td>{fila.departamento}</td>
          <td>
            <button onClick={() => props.eliminarFiscalia(indice)}>Eliminar</button>
          </td>
        </tr>
      )
    })

    return <tbody>{filas}</tbody>
}
export default BodyTabla;