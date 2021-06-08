import React from 'react'
import styled from 'styled-components';

export default function Menu01 () {
    return (
        <MenuSty01>
            <MenuObject>
                Clientes
            </MenuObject>    
            <MenuObject>
                Fornecedores
            </MenuObject>    
            <MenuObject>
                Departamentos
            </MenuObject>    
            <MenuObject>
                Produtos
            </MenuObject>    
        </MenuSty01>
    )
}

const MenuSty01 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(39, 38, 38, .5);
    gap: .5rem;
    margin-top: 3.5rem;
    margin-left: 1.3rem;
    padding: .5rem;
    width: 12rem;
`

const MenuObject = styled.a`
    list-style: none;
    color: rgb(219, 213, 213);
    text-decoration: none;
    
    &:hover {
        color: white;
    }

`

