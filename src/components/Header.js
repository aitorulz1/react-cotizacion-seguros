import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    text-align: center
`;

const Header = ({title}) => {
    return ( 
        <ContenedorHeader>
            <h1>{title}</h1>
        </ContenedorHeader>
     );
}
 
export default Header;