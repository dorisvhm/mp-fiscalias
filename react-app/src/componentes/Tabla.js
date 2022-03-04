import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';

class Tabla extends Component {
  render() {

    const { datosFiscalias, eliminarFiscalia } = this.props;

    return (
      <table className="table">
        <HeadTabla/>
        <BodyTabla datosFiscalias={datosFiscalias} eliminarFiscalia={eliminarFiscalia} />
        
      </table>
    )
  }
}

export default Tabla;
