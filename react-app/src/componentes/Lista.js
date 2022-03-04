import React from 'react';
const Lista = (props) => {


  const { datos } = props;
  if (!datos || datos.length === 0) return <p>No hay datos</p>;
  return (
    <ul>
      <h2 className='list-head'>Fiscalias</h2>
      {datos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-nombre'>{repo.nombre} </span>
            <span className='repo-direccion'>{repo.direccion}</span>
          </li>
        );
      })}
    </ul>
  );
};


export default Lista;