import React, { useEffect, useState } from "react"
import HeadTabla from './HeadTabla';
const Fiscalias = (props) => {


    const { datos } = props;
    const [idDelete, setIdDelete] = useState([]);


    const remover = (id) => {

        setIdDelete(prevState => {
            console.log(prevState);
            return prevState.filter((e, i) => i !== id);
        });

    }





    if (!datos || datos.length === 0) return <p>No hay datos</p>;
    return (
        <ul>
            <table className="table">
                <HeadTabla />
                {datos.map((repo) => {
                    return (

                        <tbody>
                            <td>{repo.nombre}</td>
                            <td>{repo.telefono}</td>
                            <td>{repo.direccion}</td>
                            <td>{repo.municipio}</td>
                            <td>{repo.departamento}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm m-1"
                                    onClick={() => props.eliminarFiscalia(repo.id)}
                                >
                                    Eliminar
                                </button>
                                <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => props.editarFiscalia(repo)}>Editar</button>
                            </td>
                        </tbody>

                    );
                })}
            </table>
        </ul>
    );
};


export default Fiscalias;