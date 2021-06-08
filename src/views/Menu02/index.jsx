import React from 'react'
import styled from 'styled-components';

export default function Menu02 () {
    return (
        <MenuSty02>
            <MenuObject>
                Vendas
            </MenuObject>    
            <MenuObject>
                Compras
            </MenuObject>    
            <MenuObject>
                Contas a receber
            </MenuObject>    
            <MenuObject>
                Contas a pagar
            </MenuObject>    
        </MenuSty02>
    )
}

const MenuSty02 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(39, 38, 38, .5);
    gap: .5rem;
    margin-top: 3.5rem;
    margin-left: 7.3rem;
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

