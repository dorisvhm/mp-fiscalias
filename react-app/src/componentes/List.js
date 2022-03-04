import React from 'react';
import { useFetch } from 'react-utils-hooks';

function List() {

  console.log('por aqui 1');
  const data = useFetch(
    'http://localhost:8000/api/getList'
  );
  console.log('por aqui');

  return(
      <div>
      <h1>List from server{"\n"}</h1>
        {data.map((item) => {
          return (
            <div>
              {item}
            </div>
          )
        })}
      </div>
  );
}

export default List;