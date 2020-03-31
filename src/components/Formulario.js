import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { diferenciaYear, segunOrigen, segunPlan } from '../Helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    // States

    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '', 
        plan: ''
    })

    const [ error, guardarError ] = useState(false)

    
    // Destructuring

    const { marca, year, plan} = datos;


    // onChange

    const onChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }


    // onSubmit

    const onSubmit = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        }


        guardarError(false);


        
        
        // Operaciones. Esta es la base del coste

        let base = 2000;


        // Obtener la diferencia de años. Si es del 2017 y estamos en el 20, la diferencia = 3

        const diferencia = diferenciaYear(year);


        // Por cada año quitamos el 3%. 

        base -= ((diferencia * 3) * base) / 100;

        
        // Americano un 15, Asiatico un 5 y Europeo un 30 más caro

        base = base * segunOrigen(marca);


        // Calcular Básico un 20 más o Completo un 50 más

        base = parseFloat(base * segunPlan(plan)).toFixed(2);



        guardarCargando(true);

            setTimeout(() => {

                guardarCargando(false)

                guardarResumen({
                    cotizacion: base,
                    datos
                })

            }, 3000);


    }

    
    

    
    







        


    



    return ( 
        
       

        <form
        
            onSubmit={onSubmit}

        >

            { error ?  <Error>'Rellena todos los campos'</Error> : null }

        <Campo>
            
            <Label>Marca</Label>
            
            <Select
                name="marca"
                value={marca}
                onChange={onChange}
            >
                    <option value="">-- Select --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                
            </Select>
        </Campo>



        <Campo>

            <Label>Año</Label>
            
            <Select
                name="year"
                value={year}
                onChange={onChange}
            >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                
            </Select>
        </Campo>



        <Campo>

            <Label>Plan</Label>

            <InputRadio
                type="radio"
                name="plan"
                value="basico"
                onChange={onChange}
                checked={plan === "basico"}
            />
                Basico
            
            <InputRadio
                type="radio"
                name="plan"
                value="completo"
                onChange={onChange}
                checked={plan === "completo"}
            />
                Completo
            
            
            </Campo>

            <Boton type="submit"> Cotizar </Boton>


        </form>
        
     );
}
 
export default Formulario;