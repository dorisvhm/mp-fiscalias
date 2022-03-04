import React, { useState, useEffect } from 'react';

const Agregar = (fiscalia) => {
   

    useEffect(() => {
        console.log("AQUIIII");
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            crossDomain:true,
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(fiscalia)
        };
        fetch('http://localhost:8080/MpWb/webresources/fiscalia', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
  
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

}

export default Agregar;