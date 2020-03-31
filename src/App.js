import React, { useState } from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import Formulario from './components/Formulario'

import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

import Spinner from './components/Spinner'

const Contenedor = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3em;
`;


function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  const { cotizacion, datos } = resumen;

  const [ cargando, guardarCargando ] = useState(false);

  return (
      <Contenedor>

       <Header 
          title="Cotizador de Seguros"
       />

          <ContenedorFormulario>

                <Formulario 
                  guardarResumen =  {guardarResumen}
                  guardarCargando = {guardarCargando}
                />

                { cargando ? <Spinner /> : null }

                <Resumen 
                  datos={datos}
                />

                <Resultado 
                  cotizacion = {cotizacion}
                />

          </ContenedorFormulario>
        
      </Contenedor>
  );
}

export default App;
