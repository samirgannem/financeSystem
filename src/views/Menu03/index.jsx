import React from 'react'
import styled from 'styled-components';

export default function Menu03 () {
    return (
        <MenuSty03>
            <MenuObject>
                Financeiro
            </MenuObject>    
            <MenuObject>
                Produtos
            </MenuObject>    
            <MenuObject>
                Clientes
            </MenuObject>    
            <MenuObject>
                Fornecedores
            </MenuObject>    
        </MenuSty03>
    )
}

const MenuSty03 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(39, 38, 38, .5);
    gap: .5rem;
    margin-top: 3.5rem;
    margin-left: 16.5rem;
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

