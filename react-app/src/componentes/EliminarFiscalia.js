import React, { useState, useEffect } from 'react';

function EliminarFiscalia() {
    const [idDelete, setIdDelete] = useState([]);

    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            crossDomain:true,
            mode: 'cors',
            method: 'DELETE',
            headers: { 'Content-Type': 'text/plain' },
            //body: JSON.stringify({})
        };
        fetch('http://localhost:8080/MpWb/webresources/fiscalia/1', requestOptions)
            .then(response => response.json())
            .then(data => setIdDelete(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

}

export { EliminarFiscalia };